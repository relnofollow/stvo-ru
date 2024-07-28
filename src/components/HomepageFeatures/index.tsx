import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Перевод StVO',
    Svg: require('@site/static/img/gesetze-im-internet.svg').default,
    description: (
      <>
        Оригинал правил взят на сайте <a href="https://www.gesetze-im-internet.de/stvo_2013/" style={{ whiteSpace: 'nowrap' }}>www.gesetze-im-internet.de</a>.<br />
        Дата перевода: 17.07.2024.
      </>
    ),
  },
  {
    title: 'Машинный перевод',
    Svg: require('@site/static/img/deepl-logo.svg').default,
    description: (
      <>
        Основа перевода выполнена с помощью сервиса <a href="https://www.deepl.com/">DeepL</a>, использующего для перевода нейронную сеть.
      </>
    ),
  },
  {
    title: 'Исправления приветствуются',
    Svg: require('@site/static/img/github-logo.svg').default,
    description: (
      <>
        Если вы нашли ошибку в переводе, не стесняйтесь предложить исправление.<br />
        Код проекта доступен на <a href="https://github.com/relnofollow/stvo-ru/">GitHub</a>. 
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
