---
title: 'V-Intl :: Relative time formatting'
description: 'Intl Relative time formatter for your Vue apps'
---

# Relative time formatting

Relative time formatting using this plugin is basically wrapper for [`Intl.RelativeTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat) constructor.

## Usage example

```vue
<template>
  <!-- output will be: "in 10 days" -->
  <v-intl-relative-time-format
    wrapper="w-full"
    :payload="payload"
    :format="formatOptions"
  />
</template>
<script>
  import { VIntlRelativeTimeFormat } from '@vinayakkulkarni/v-intl';
  export default {
    name: 'YourAwesomeComponent',
    components: {
      VIntlRelativeTimeFormat,
    },
    data() {
      return {
        payload: {
          number: 10,
          time: 'days',
        },
        formatOptions: {
          locales: 'en-IN', // any valid locale in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation
          options: {
            localeMatcher: 'best fit', // other values: "lookup"
            numeric: 'always', // other values: "auto"
            style: 'long', // other values: "short" or "narrow"
          }
        }
      };
    },
  };
</script>
```