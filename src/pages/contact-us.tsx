import React from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";

export default function ContactUs() {
  return (
    <Layout title="Форма обратной связи" description="Форма обратной связи">
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <section>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSd7E2Ekab-_jpiyQNunVTTgC5VzQy565XAvo_LzKlHlURCHhA/viewform?embedded=true"
          width="100%"
          height="900"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
        >
          Loading…
        </iframe>
      </section>
    </Layout>
  );
}
