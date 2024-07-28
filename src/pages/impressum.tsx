import React from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";

export default function Impressum() {
  return (
    <Layout title="Импрессум | Impressum" description="Импрессум | Impressum">
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <section className="padding-top--lg">
        <div className="container">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col col--10">
              <h1 className="margin-bottom--lg">Impressum</h1>
              <h2>Website Owner</h2>
              <p>
                Elena Kim
                <br />
                Goerzallee 101 12207
                <br />
                Berlin, Germany
              </p>
              <h2>Contacts</h2>
              <p>
                Email: contact.stvo.ru.de@gmail.com
                <br />
                VAT Identification Number: N/A
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
