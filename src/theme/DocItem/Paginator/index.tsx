import React, { type ReactNode, useEffect } from "react";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import DocPaginator from "@theme/DocPaginator";
import Tip from "@theme-original/Admonition/Type/Tip";
import Info from "@theme-original/Admonition/Type/Info";

/**
 * This extra component is needed, because <DocPaginator> should remain generic.
 * DocPaginator is used in non-docs contexts too: generated-index pages...
 */
export default function DocItemPaginator(): ReactNode {
  const { metadata } = useDoc();
  const { title, slug } = metadata;

  return (
    <>
      <DocPaginator previous={metadata.previous} next={metadata.next} />
      <Info
        title="Нужна оффлайн-версия или версия для печати?"
        icon="💡"
        className={"margin-top--lg"}
      >
        Вы можете <a href="/download">скачать перевод в PDF</a>.
      </Info>
      <Tip title="Поддержать проект" className={"margin-top--lg"} icon="🙏">
        <p>
          Если перевод оказался для вас полезным и вы хотите поддержать проект:
        </p>
        <p>
          <a href="https://www.buymeacoffee.com/stvo.ru" target="_blank">
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy Me A Coffee"
              style={{ height: "40px", width: "145px" }}
            />
          </a>
        </p>
      </Tip>
    </>
  );
}
