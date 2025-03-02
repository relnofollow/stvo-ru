import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Disclaimer from "@site/src/components/Disclaimer";
import { PRINT_DATE, STVO_VERSION } from "@site/src/common/consts";
import styles from "./download.module.css";

export default function Download() {
  const trackClick = () => {
    if (window["sa_event"]) {
      window.sa_event("click_download_pdf");
    }

    return true;
  };

  return (
    <Layout
      title="Скачать правила дорожного движения Германии"
      description="ПДД Германии в формате PDF"
    >
      <section className="padding-top--lg padding-bottom--lg">
        <div className="container">
          <div className="row">
            <div className="col col--offset-2 col--8">
              <h1 className="margin-bottom--lg">ПДД Германии в формате PDF</h1>
              <Disclaimer className="margin-bottom--lg" isDocumentDownload />
              <div className={styles.downloadContainer}>
                <div
                  className={styles.downloadContainer__file + " h-align-center"}
                >
                  <table>
                    <tbody>
                      <tr>
                        <td>Версия StVO</td>
                        <td>{STVO_VERSION}</td>
                      </tr>
                      <tr>
                        <td>Дата создания документа</td>
                        <td>{PRINT_DATE}</td>
                      </tr>
                      <tr>
                        <td>Размер файла</td>
                        <td>2.627 KB</td>
                      </tr>
                      <tr>
                        <td>Название файла</td>
                        <td>stvo-ru-{STVO_VERSION}.pdf</td>
                      </tr>
                    </tbody>
                  </table>

                  <a
                    href={`/downloads/stvo-ru-${STVO_VERSION}.pdf`}
                    onClick={trackClick}
                    className="button button--lg button--primary"
                    download={true}
                  >
                    Скачать
                  </a>
                </div>

                <div className="h-align-center">
                  <p className="text--center margin-top--lg">
                    💡 Эти правила также можно читать он-лайн
                  </p>

                  <Link
                    href="/docs"
                    className="button button--lg button--secondary"
                  >
                    Перейти к правилам
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
