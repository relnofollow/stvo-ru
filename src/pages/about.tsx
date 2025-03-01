import React from "react";
import Layout from "@theme/Layout";
import Disclaimer from "@site/src/components/Disclaimer";

export default function About() {
  return (
    <Layout
      title="О Проекте"
      description="О проекте перевода StVO на русский язык"
    >
      <section className="padding-top--lg padding-bottom--lg">
        <div className="container">
          <div className="row">
            <div className="col col--offset-2 col--8">
              <h1 className="margin-bottom--lg">О проекте "StVO Ru"</h1>
              <Disclaimer className="margin-bottom--lg" />
              <p>Hallo 👋 Меня зовут Лена, я живу в Берлине 🏙</p>
              <p>
                Цель этого сайта - помочь русскоговорящим людям познакомиться с
                ПДД Германии.
              </p>
              <p>
                Для подготовки к теоретическому экзамену на получение
                водительских прав я использовала приложение, которое повторяет
                вопросы экзамена (
                <a href="https://www.theorie24.de/fuehrerschein-auf-russisch/">
                  Führerschein App
                </a>
                ). И, хотя вопросы и варианты ответов доступны на русском языке,
                в приложении нет перевода полного текста правил.
              </p>
              <p>
                Я подумала, что было бы здорово иметь такой перевод, чтобы
                получить более полное представление о правилах и лучше
                подготовиться к экзамену. Для начала я взяла текст правил и
                перевела его с помощью{" "}
                <a href="https://www.deepl.com/">DeepL</a>. Перевод получился
                "good enough", поэтому я решила его опубликовать. Так и
                появилась идея этого сайта 💡
              </p>
              <p>
                Перевод не идеальный, но вместе мы можем сделать его лучше 🙌
                Пожалуйста, не стесняйтесь предлагать исправления, если увидели
                ошибку. Проект выложен на{" "}
                <a href="https://github.com/relnofollow/stvo-ru/">GitHub</a> в
                открытый доступ. Исправления будут опубликованы сразу после
                проверки 🚀
              </p>
              <p>
                Если у вас есть вопросы, пожелания или идеи по улучшению сайта,
                пожалуйста, свяжитесь со мной через{" "}
                <a href="/contact-us" className="text--no-wrap">
                  форму обратной связи
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
