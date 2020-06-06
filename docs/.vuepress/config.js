module.exports = {
  themeConfig: {
    sidebar: {
      '/': [
        ['', 'V-Intl 🌏'],
        {
          title: 'Formatters',
          path: '/guide/',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            ['/guide/format/list', 'Format List'],
            ['/guide/format/number', 'Format Number'],
            ['/guide/format/date-time', 'Format Date & Time'],
            ['/guide/format/relative-time', 'Format Relative Time'],
            ['/guide/format/display-names', 'Format Display Names'],
          ],
        },
      ],
    },
    nav: [{ text: 'Home', link: '/' }],
    theme: '@vuepress/theme-default',
    searchPlaceholder: 'Search...',
    lastUpdated: 'Last Updated', // string | boolean
    // Smooth Scrolling
    smoothScroll: true,
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'vinayakkulkarni/v-intl',
    // Optional options for generating "Edit this page" link
    // if your docs are in a different repo from your main project:
    docsRepo: 'vinayakkulkarni/v-intl',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!',
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': '../src/',
      },
    },
  },
};
