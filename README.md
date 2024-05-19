# [v-intl 🖼](https://github.com/vinayakkulkarni/v-intl#readme)

[![Continuous Integration](https://github.com/vinayakkulkarni/v-intl/actions/workflows/ci.yml/badge.svg)](https://github.com/vinayakkulkarni/v-intl/actions/workflows/ci.yml)
[![CodeQL](https://github.com/vinayakkulkarni/v-intl/actions/workflows/codeql.yml/badge.svg)](https://github.com/vinayakkulkarni/v-intl/actions/workflows/codeql.yml)
[![Ship js trigger](https://github.com/vinayakkulkarni/v-intl/actions/workflows/shipjs-trigger.yml/badge.svg)](https://github.com/vinayakkulkarni/v-intl/actions/workflows/shipjs-trigger.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/vinayakkulkarni/v-intl?sort=semver&logo=github)](https://github.com/vinayakkulkarni/v-intl/releases)
[![npm](https://img.shields.io/npm/v/@vinayakkulkarni/v-intl?logo=npm)](https://www.npmjs.com/package/@vinayakkulkarni/v-intl)
[![npm](https://img.shields.io/npm/dm/@vinayakkulkarni/v-intl?logo=npm)](http://npm-stat.com/charts.html?package=@vinayakkulkarni/v-intl)
[![npm bundle size (version)](https://img.shields.io/bundlephobia/min/@vinayakkulkarni/v-intl/latest)](https://bundlephobia.com/package/@vinayakkulkarni/v-intl@latest)
[![npm type definitions](https://img.shields.io/npm/types/@vinayakkulkarni/v-intl)](https://github.com/vinayakkulkarni/v-intl/blob/master/package.json)
[![DeepScan grade](https://deepscan.io/api/teams/9055/projects/22877/branches/682246/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=9055&pid=22877&bid=682246)
[![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/vinayakkulkarni/v-intl)](https://snyk.io/test/github/vinayakkulkarni/v-intl)
[![license](https://img.shields.io/npm/l/@vinayakkulkarni/v-intl)](https://github.com/vinayakkulkarni/v-intl/blob/master/LICENSE)
[![GitHub contributors](https://img.shields.io/github/contributors/vinayakkulkarni/v-intl)](https://github.com/vinayakkulkarni/v-intl/graphs/contributors)

[![eslint](https://img.shields.io/npm/dependency-version/@vinayakkulkarni/v-intl/dev/eslint?logo=eslint)](https://eslint.org/)
[![prettier](https://img.shields.io/npm/dependency-version/@vinayakkulkarni/v-intl/dev/prettier?logo=prettier)](https://prettier.io/)
[![vite](https://img.shields.io/npm/dependency-version/@vinayakkulkarni/v-intl/dev/vite?logo=vite)](https://vitejs.dev/)
[![vue](https://img.shields.io/npm/dependency-version/@vinayakkulkarni/v-intl/dev/vue?logo=vue.js)](https://vuejs.org/)
[![typescript](https://img.shields.io/npm/dependency-version/@vinayakkulkarni/v-intl/dev/typescript?logo=TypeScript)](https://www.typescriptlang.org/)

---

Intl in your dopeass Vue 3 apps 👨‍🔧

## Demo

[![Edit v-intl](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/v-intl-7e0j0?fontsize=14&hidenavigation=1&theme=dark)

## Usage

### [In the docs 📓](https://v-intl.netlify.app)

## Background

The package exposes 5 `Intl` components, viz.,

| Formatter                                                                             | What it does?                                           | More Info                                                                                                                                |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [VIntlListFormat](https://v-intl.netlify.app/guide/format/list.html)                  | _Enables language-sensitive list formatting._           | [Read More](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat)                            |
| [VIntlNumberFormat](https://v-intl.netlify.app/guide/format/number.html)              | _Enable language sensitive number formatting._          | [Read More](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)                          |
| [VIntlDateTimeFormat](https://v-intl.netlify.app/guide/format/date-time.html)         | _Formats the Date & Time._                              | [Read More](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)                        |
| [VIntlRelativeTimeFormat](https://v-intl.netlify.app/guide/format/relative-time.html) | _Create a relative time formatter in specified locale._ | [Read More](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat) |
| [VIntlDisplayNames](https://v-intl.netlify.app/guide/format/display-names.html)       | _Translates region, language, currency, script._        | [Read More](https://v8.dev/features/intl-displaynames#full-api)                                                                          |
| [VIntlDurationFormat](https://v-intl.netlify.app/guide/format/duration.html)          | _Enables language-sensitive duration formatting._       | [Read More](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat)                        |

They're are tree-shakable, meaning, you don't need to bulk up your bundle by including all the components.
I've tried to keep the API as consistent as possible.

## Author

**v-intl** &copy; [Vinayak](https://github.com/vinayakkulkarni), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by Vinayak Kulkarni with help from contributors ([list](https://github.com/vinayakkulkarni/v-intl/contributors)).

> [vinayakkulkarni.dev](https://vinayakkulkarni.dev) · GitHub [@vinayakkulkarni](https://github.com/vinayakkulkarni) · Twitter [@\_vinayak_k](https://twitter.com/_vinayak_k)
