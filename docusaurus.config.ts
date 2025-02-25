import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Ottawa Rust',
  tagline: 'Rustaceans by the River',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.ottawa-rust.ca',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Ottawa-Rust', // Usually your GitHub org/user name.
  projectName: 'ottawa-rust.github.io', // Usually your repo name.
  deploymentBranch: 'deployment',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeConfigs: {
      en: {
        htmlLang: 'en-CA',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/ottawa-rust.svg',
    navbar: {
      title: 'Ottawa Rust',
      logo: {
        alt: 'Ottawa Rust Logo',
        src: 'img/ottawa-rust.svg',
      },
      items: [
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          type: 'docSidebar',
          sidebarId: 'homeSidebar',
          position: 'left',
          label: 'Home',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://www.meetup.com/meetup-group-bdcioynp/',
          label: 'Meetup',
          position: 'right',
        },
        {
          href: 'https://github.com/ottawa-rust',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.ottawa-rust.ca/blog/rss.xml',
          label: 'RSS',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Home',
              to: '/introduction',
            },
            {
              label: 'Events',
              to: '/events',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'YouTube',
              href: 'https://youtube.com/ottawa-rust',
            },
            {
              label: 'Zulip',
              href: 'https://zulip.com/invite/ottawa-rust',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ottawa-rust',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ottawa Rust Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
