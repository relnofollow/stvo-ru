import React, { type ReactNode } from "react";
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
          <br />
          <a href="/download">Buy me a coffee</a>.
        </p>
      </Tip>
    </>
  );
}
