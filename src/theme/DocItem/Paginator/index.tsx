import React, { type ReactNode } from "react";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import DocPaginator from "@theme/DocPaginator";
import { DiscussionEmbed } from "disqus-react";
import styles from "./styles.module.css";

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
      <DiscussionEmbed
        className={styles.comments}
        shortname="stvo-ru-de"
        config={{
          identifier: slug,
          title,
          language: "ru",
        }}
      />
    </>
  );
}
