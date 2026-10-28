# [v-intl 🖼](https://github.com/vinayakkulkarni/v-intl#readme)

<!-- Badges -->

[![Pipeline](https://img.shields.io/github/actions/workflow/status/vinayakkulkarni/v-intl/pipeline.yml?branch=main&logo=github-actions&label=pipeline)](https://github.com/vinayakkulkarni/v-intl/actions/workflows/pipeline.yml)
[![Doctor](https://img.shields.io/badge/doctor-audited-2ea043?logo=vuedotjs&label=doctor)](https://github.com/geoql/doctor)
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

**[Live demo](https://v-intl.vinayakkulkarni.dev/?utm_source=github&utm_medium=readme&utm_campaign=v-intl)** · [npm](https://www.npmjs.com/package/@vinayakkulkarni/v-intl) · [JSR](https://jsr.io/@vinayakkulkarni/v-intl)

---

Intl in your dopeass Vue 3 apps 👨‍🔧

## Demo

Try every component live at **[v-intl.vinayakkulkarni.dev](https://v-intl.vinayakkulkarni.dev/?utm_source=github&utm_medium=readme&utm_campaign=v-intl)**. Pick a locale and the whole page re-formats.

## Install

```sh
pnpm add @vinayakkulkarni/v-intl
```

## Usage

```vue
<script setup lang="ts">
  import { VIntlNumberFormat } from '@vinayakkulkarni/v-intl';

  const format = {
    locales: 'de-DE',
    options: { style: 'currency', currency: 'EUR' },
  };
</script>

<template>
  <!-- 123.456,79 € -->
  <VIntlNumberFormat :payload="123456.789" :format="format" />
</template>
```

Every component takes the same props:

| Prop      | Type                                 | Notes                                             |
| --------- | ------------------------------------ | ------------------------------------------------- |
| `payload` | depends on the component (see below) | Required.                                         |
| `format`  | `{ locales, options }`               | `options` is the matching `Intl.*Options` object. |
| `wrapper` | `string`                             | Class for the wrapping `<div>`.                   |
| `toParts` | `boolean`                            | Return `formatToParts()` output where supported.  |

To register all components globally, use the plugin: `app.use(VIntl)` with `import VIntl from '@vinayakkulkarni/v-intl'`.

## Background

The package exposes 6 `Intl` components, viz.,

| Formatter                                                                                                                            | What it does?                                           | More Info                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [VIntlListFormat](https://v-intl.vinayakkulkarni.dev/?utm_source=github&utm_medium=readme&utm_campaign=v-intl#list)                  | _Enables language-sensitive list formatting._           | [Read More](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat)                            |
| [VIntlNumberFormat](https://v-intl.vinayakkulkarni.dev/?utm_source=github&utm_medium=readme&utm_campaign=v-intl#number)              | _Enable language sensitive number formatting._          | [Read More](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)                          |
| [VIntlDateTimeFormat](https://v-intl.vinayakkulkarni.dev/?utm_source=github&utm_medium=readme&utm_campaign=v-intl#date-time)         | _Formats the Date & Time._                              | [Read More](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)                        |
| [VIntlRelativeTimeFormat](https://v-intl.vinayakkulkarni.dev/?utm_source=github&utm_medium=readme&utm_campaign=v-intl#relative-time) | _Create a relative time formatter in specified locale._ | [Read More](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat) |
| [VIntlDisplayNames](https://v-intl.vinayakkulkarni.dev/?utm_source=github&utm_medium=readme&utm_campaign=v-intl#display-names)       | _Translates region, language, currency, script._        | [Read More](https://v8.dev/features/intl-displaynames#full-api)                                                                          |
| [VIntlDurationFormat](https://v-intl.vinayakkulkarni.dev/?utm_source=github&utm_medium=readme&utm_campaign=v-intl#duration)          | _Enables language-sensitive duration formatting._       | [Read More](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat)                        |

They're are tree-shakable, meaning, you don't need to bulk up your bundle by including all the components.
I've tried to keep the API as consistent as possible.

## Author

**v-intl** &copy; [Vinayak](https://github.com/vinayakkulkarni), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by Vinayak Kulkarni with help from contributors ([list](https://github.com/vinayakkulkarni/v-intl/contributors)).

> [vinayakkulkarni.dev](https://vinayakkulkarni.dev/?utm_source=github&utm_medium=readme&utm_campaign=v-intl) · GitHub [@vinayakkulkarni](https://github.com/vinayakkulkarni) · Twitter [@\_vinayak_k](https://twitter.com/_vinayak_k)

## More from the author

- [v-clappr](https://v-clappr.vinayakkulkarni.dev/?utm_source=github&utm_medium=readme&utm_campaign=v-intl) — Vue 3 wrapper for the Clappr media player
- [v-pip](https://v-pip.vinayakkulkarni.dev/?utm_source=github&utm_medium=readme&utm_campaign=v-intl) — picture-in-picture for Vue 3
- [v-spotlight](https://v-spotlight.vinayakkulkarni.dev/?utm_source=github&utm_medium=readme&utm_campaign=v-intl) — cursor spotlight overlay for Vue 3
- [v-image](https://v-image.vinayakkulkarni.dev/?utm_source=github&utm_medium=readme&utm_campaign=v-intl) — Vue 3 image input with live preview
- [nxui](https://nxui.geoql.in/?utm_source=github&utm_medium=readme&utm_campaign=v-intl) — animated copy-paste UI components and Paper Shaders for Vue 3 and Nuxt
- [shadscan-vue](https://shadscan-vue.geoql.in/?utm_source=github&utm_medium=readme&utm_campaign=v-intl) — UI-fundamentals audits for shadcn-vue and shadcn-nuxt apps

See every project at [vinayakkulkarni.dev/projects](https://vinayakkulkarni.dev/projects?utm_source=github&utm_medium=readme&utm_campaign=v-intl) and [geoql.in](https://geoql.in/?utm_source=github&utm_medium=readme&utm_campaign=v-intl).
