# [v-intl 🖼](https://github.com/vinayakkulkarni/v-intl#readme)

<!-- Badges -->

[![Pipeline](https://img.shields.io/github/actions/workflow/status/vinayakkulkarni/v-intl/pipeline.yml?branch=main&logo=github-actions&label=pipeline)](https://github.com/vinayakkulkarni/v-intl/actions/workflows/pipeline.yml)
[![GitHub release](https://img.shields.io/github/v/release/vinayakkulkarni/v-intl?sort=semver&logo=github&label=release)](https://github.com/vinayakkulkarni/v-intl/releases)
[![npm](https://img.shields.io/npm/v/@vinayakkulkarni%2Fv-intl?logo=npm&label=npm)](https://www.npmjs.com/package/@vinayakkulkarni/v-intl)
[![JSR](https://img.shields.io/jsr/v/@vinayakkulkarni/v-intl?logo=jsr&label=jsr)](https://jsr.io/@vinayakkulkarni/v-intl)
[![npm downloads](https://img.shields.io/npm/dm/@vinayakkulkarni%2Fv-intl?logo=npm&label=downloads)](http://npm-stat.com/charts.html?package=@vinayakkulkarni/v-intl)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@vinayakkulkarni%2Fv-intl?label=size)](https://bundlephobia.com/package/@vinayakkulkarni/v-intl@latest)
[![types](https://img.shields.io/npm/types/@vinayakkulkarni%2Fv-intl?logo=typescript&label=types)](https://github.com/vinayakkulkarni/v-intl/blob/main/package.json)
[![License](https://img.shields.io/github/license/vinayakkulkarni/v-intl?logo=github&label=license)](./LICENSE)

[![vite-plus](https://img.shields.io/github/package-json/dependency-version/vinayakkulkarni/v-intl/dev/vite-plus?logo=vite&label=vite-plus)](https://github.com/voidzero-dev/vite-plus)
[![typescript](https://img.shields.io/github/package-json/dependency-version/vinayakkulkarni/v-intl/dev/typescript?logo=TypeScript&label=typescript)](https://www.typescriptlang.org/)
[![pnpm](https://img.shields.io/github/package-json/packageManager/vinayakkulkarni/v-intl?label=pnpm&logo=pnpm)](https://pnpm.io/)
[![node](https://img.shields.io/node/v/@vinayakkulkarni%2Fv-intl?logo=node.js&label=node)](https://nodejs.org/)

<!-- End Badges -->

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
