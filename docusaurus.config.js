// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lis R. Barreto',
  tagline: 'Machine Learning Engineer',
  favicon: 'img/favicon.ico',

  // Set the production URL of your site here
  url: 'https://lis-r-barreto.github.io',
  baseUrl: '/portfolio/',

  // GitHub pages deployment config
  organizationName: 'lis-r-barreto', // GitHub username
  projectName: 'portfolio', // Repository name
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/lis-r-barreto/portfolio/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/lis-r-barreto/portfolio/edit/main/',
          blogSidebarTitle: 'Todos os Posts',
          blogSidebarCount: 'ALL', // Mostra todos os posts na barra lateral
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Lis R. Barreto',
      logo: {
        alt: 'Lis Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar', // This links to the sidebar defined for Projects
          sidebarId: 'projectsSidebar', 
          position: 'left',
          label: 'Projetos',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/lis-r-barreto/portfolio',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Projetos',
          items: [
            {
              label: 'Primeiro Projeto',
              to: '/docs/projects/first-project',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
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
              href: 'https://github.com/lis-r-barreto/portfolio',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Lis R. Barreto. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
