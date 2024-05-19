---
title: 'V-Intl :: Duration formatting'
description: 'Duration Intl formatter for your Vue apps'
---

# Date & time formatting 🧪

The [`Intl.DurationFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat) object enables language-sensitive duration formatting.

## Usage examples

### Get Durations in different styles

```vue
<template>
  <!-- output will be: "1 heure, 46 minutes et 40 secondes" -->
  <v-intl-duration-format
    wrapper="w-full"
    :payload="payload"
    :format="{ locales: 'fr-FR', options: { style: 'long' } }"
  />
  <!-- output will be: "1 hr, 46 min and 40 sec" -->
  <v-intl-duration-format
    wrapper="w-full"
    :payload="payload"
    :format="{ locales: 'en', options: { style: 'short' } }"
  />
  <!-- output will be: "1h 46min 40s" -->
  <v-intl-duration-format
    wrapper="w-full"
    :payload="payload"
    :format="{ locales: 'pt', options: { style: 'short' } }"
  />
</template>
<script>
  import { VIntlDurationFormat } from '@vinayakkulkarni/v-intl';
  export default {
    name: 'YourAwesomeComponent',
    components: {
      VIntlDurationFormat,
    },
    data() {
      return {
        payload: {
          hours: 1,
          minutes: 46,
          seconds: 40,
        },
      };
    },
  };
</script>
```

