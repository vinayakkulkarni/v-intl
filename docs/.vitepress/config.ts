import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'V-Intl',
  description: 'Easy i18n in your next Vue app :)',
  themeConfig: {
    nav: [{ text: 'V-Intl 🌏', link: '/' }],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Intro', link: '/guide/' },
          { text: 'Format List', link: '/guide/format/list' },
          { text: 'Format Number', link: '/guide/format/number' },
          { text: 'Format Date & Time', link: '/guide/format/date-time' },
          { text: 'Format Relative Time', link: '/guide/format/relative-time' },
          { text: 'Format Display Names', link: '/guide/format/display-names' },
        ],
      },
    ],
    footer: {
      message:
        'Released under the <a href="https://github.com/vinayakkulkarni/v-intl/blob/main/LICENSE">MIT License</a>.',
      copyright:
        'Copyright &copy; 2019-present <a href="https://github.com/vinayakkulkarni">Vinayak Kulkarni</a>',
    },
  },
});
