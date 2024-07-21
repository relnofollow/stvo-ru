const fs = require('fs');
const readline = require('readline');
const stvoMeta = require('./StVO-meta.json');
const path = require('path');

const OUTPUT_DIR = './sections';

async function* generateSubsectionsFromText() {
    const fileStream = fs.createReadStream('StVO-text.txt');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    const subsectionRegex = /^§\s+(?<subsectionId>\d+\w?)\s+(?<subsectionName>.*)/;

    let subsectionLines = [];
    let subsectionId;
    let subsectionName;

    for await (const line of rl) {
        const match = line.match(subsectionRegex);

        if (match) {
            if (subsectionLines.length) {
                yield {
                    subsectionId,
                    subsectionName,
                    subsectionLines,
                };
            }

            subsectionName = match.groups.subsectionName;
            subsectionId = match.groups.subsectionId;
            subsectionLines = [line];
        } else {
            subsectionLines.push(line);
        }
    }

    yield {
        subsectionId,
        subsectionName,
        subsectionLines,
    };
}

function generateSubsectionMd(subsection, subsectionMeta) {
    const { subsectionLines } = subsection;
    const mdLines = [];

    mdLines.push(
`---
sidebar_label: ${subsectionLines[0]}
---

# ${subsectionLines[0]}

:::info[Оригинал]

[${subsectionMeta.title}](${subsectionMeta.url})

:::
`);

    const paragraphRegex = /^\((\d+\w?)\)/

    for (let i = 1; i < subsectionLines.length; i++) {
        const line = subsectionLines[i];
        const mdLine = line.replace(paragraphRegex, (match, paragraphNumber) => {
            return `\n
<span id="${paragraphNumber}">[(${paragraphNumber})](#${paragraphNumber})</span>`
        });

        mdLines.push(mdLine + '\n');
    }

    return mdLines;
}

(async () => {
    try {
        let subsectionsGenerator = generateSubsectionsFromText();

        await fs.promises.rm(OUTPUT_DIR, { force: true, recursive: true });
        await fs.promises.mkdir(OUTPUT_DIR);

        for await (let subsection of subsectionsGenerator) {
            const subsectionMeta = stvoMeta[subsection.subsectionId];

            console.log(`Subsection: ${subsection.subsectionName}`);

            if (!subsectionMeta) {
                throw new Error(`No metadata found for subsection ${subsection.subsectionName}`);
            }

            const subsectionMd = generateSubsectionMd(subsection, subsectionMeta);
            const outputFile = path.join(OUTPUT_DIR, `${subsectionMeta.slug}.md`);
            
            fs.promises.writeFile(outputFile, subsectionMd);
        }

    } catch (err) {
        await fs.promises.rm(OUTPUT_DIR, { force: true, recursive: true });
        console.error(err);
    }
})();