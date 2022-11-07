---
title: 'V-Intl :: Number formatting'
description: 'Number Intl formatter for your Vue apps'
---

# Number formatting

This package enable language-sensitive number formatting using [`Intl.NumberFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) constructor.

## Usage example

### Currency

```vue
<template>
  <!-- output will be: "123.456,79 €" -->
  <v-intl-number-format
    wrapper="w-full"
    :payload="payload"
    :format="formatOptions"
  />
</template>
<script>
  import { VIntlNumberFormat } from '@vinayakkulkarni/v-intl';
  export default {
    name: 'YourAwesomeComponent',
    components: {
      VIntlNumberFormat,
    },
    data() {
      return {
        payload: 123456.789,
        formatOptions: {
          locales: 'de-DE', // any valid locale in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation
          options: {
            style: 'currency',
            currency: 'EUR',
          },
        },
      };
    },
  };
</script>
```

### Limit to three significant digits

```vue
<template>
  <!-- output will be: "1,23,000" -->
  <v-intl-number-format
    wrapper="w-full"
    :payload="payload"
    :format="formatOptions"
  />
</template>
<script>
  import { VIntlNumberFormat } from '@vinayakkulkarni/v-intl';
  export default {
    name: 'YourAwesomeComponent',
    components: {
      VIntlNumberFormat,
    },
    data() {
      return {
        payload: 123456.789,
        formatOptions: {
          locales: 'en-IN', // any valid locale in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation
          options: {
            maximumSignificantDigits: 3,
          },
        },
      };
    },
  };
</script>
```

### Using style as unit

```vue
<template>
  <!-- output will be: "50 mi/h" -->
  <v-intl-number-format
    wrapper="w-full"
    :payload="payload"
    :format="formatOptions"
  />
</template>
<script>
  import { VIntlNumberFormat } from '@vinayakkulkarni/v-intl';
  export default {
    name: 'YourAwesomeComponent',
    components: {
      VIntlNumberFormat,
    },
    data() {
      return {
        payload: 50,
        formatOptions: {
          locales: 'pt-PT', // any valid locale in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation
          options: {
            style: 'unit',
            unit: 'mile-per-hour',
          },
        },
      };
    },
  };
</script>
```

### Using notation

```vue
<template>
  <!-- output will be: "9,877E8" -->
  <v-intl-number-format wrapper="w-full" :payload="987654321" :format="{
  'pt-PT', { notation: "scientific" } }" />
  <!-- output will be: "987.654E6" -->
  <v-intl-number-format wrapper="w-full" :payload="987654321" :format="{
  'en-GB', { notation: "engineering" } }" />
  <!-- output will be: "9.9亿" -->
  <v-intl-number-format wrapper="w-full" :payload="987654321" :format="{
  'zh-CN', { notation: "compact" } }" />
  <!-- output will be: "988M" -->
  <v-intl-number-format wrapper="w-full" :payload="987654321" :format="{ 'fr', {
  notation: "compact" , compactDisplay: "long" } }" />
  <!-- output will be: "9.9亿" -->
  <v-intl-number-format wrapper="w-full" :payload="987654321" :format="{
  'en-GB', { notation: "compact" , compactDisplay: "short" } }" />
</template>
<script>
  import { VIntlNumberFormat } from '@vinayakkulkarni/v-intl';
  export default {
    name: 'YourAwesomeComponent',
    components: {
      VIntlNumberFormat,
    },
  };
</script>
```
