import React, { type ReactNode } from "react";
import Info from "@theme-original/Admonition/Type/Info";
import type InfoType from "@theme/Admonition/Type/Info";
import type { WrapperProps } from "@docusaurus/types";

export default function Disclaimer({
  isDocumentDownload,
  className,
}: {
  className?: string;
  isDocumentDownload?: boolean;
}): ReactNode {
  return (
    <>
      <Info title="Важно!" className={className}>
        Перевод ПДД {isDocumentDownload ? "в этом документе" : "на этом сайте"}{" "}
        выполнен с помощью сервиса <b>машинного перевода</b>, может содержать
        неточности и <b>не является</b> официальным переводом StVO на русский
        язык.
      </Info>
    </>
  );
}
