import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Правила дорожного движения Германии',
  tagline: 'StVO (Straßenverkehrs-Ordnung) на русском языке',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  // Set the production url of your site here
  url: 'https://stvo-ru.de',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  scripts: [
    {
        src: 'https://plausible.io/js/script.js',
        'data-domain': 'stvo-ru.de',
        defer: true
    }
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/relnofollow/stvo-ru/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/stvo-social-card.jpg',
    navbar: {
      title: 'StVO Ru',
      logo: {
        alt: 'StVO Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'rulesSidebar',
          position: 'left',
          label: 'ПДД Германии',
        },
        {to: '/about', label: 'О проекте', position: 'left'},
        {
            href: 'https://www.gesetze-im-internet.de/stvo_2013/',
            label: 'StVO | Gesetze im Internet',
            position: 'right',
          },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'StVO на русском',
          items: [
            {
              label: 'Главная страница',
              to: '/',
            },
            {
                label: 'О проекте',
                to: '/about'
            },
            {
                label: 'GitHub',
                href: 'https://github.com/relnofollow/stvo-ru/',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Impressum',
              href: '/impressum',
            },
            {
              label: 'Privacy Policy',
              href: '/privacy-policy',
            },
          ],
        },
        {
          title: 'Контакты',
          items: [
            {
              label: 'Форма обратной связи',
              to: '/contact-us',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} StVO Ru`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
