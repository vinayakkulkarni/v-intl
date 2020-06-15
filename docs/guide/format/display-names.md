---
title: 'V-Intl :: Display names formatting'
description: 'Display names Intl formatter for your Vue apps'
---

# Display names formatting 🧪

The new [`Intl.DisplayNames`](https://v8.dev/features/intl-displaynames) API gives JavaScript developers direct access to those translations, allowing applications to more easily display localized names.


## Usage examples

### Get Region Names in English
```vue
<template>
  <!-- output will be: "'United States'" -->
  <v-intl-display-names
    wrapper="w-full"
    :payload="'US'"
    :format="formatOptions"
  />
  <!-- output will be: "'Bosnia & Herzegovina'" -->
  <v-intl-display-names
    wrapper="w-full"
    :payload="'BA'"
    :format="formatOptions"
  />
  <!-- output will be: "'Myanmar (Burma)'" -->
  <v-intl-display-names
    wrapper="w-full"
    :payload="'MM'"
    :format="formatOptions"
  />
</template>
<script>
  import { VIntlDisplayNames } from '@vinayakkulkarni/v-intl';
  export default {
    name: 'YourAwesomeComponent',
    components: {
      VIntlDisplayNames,
    },
    data() {
      return {
        formatOptions: {
          locales: 'en',
          options: { type: 'region' }
        }
      };
    },
  };
</script>
```

### Get Language Names in Traditional Chinese
```vue
<template>
  <!-- output will be: "'法文'" -->
  <v-intl-display-names
    wrapper="w-full"
    :payload="'fr'"
    :format="formatOptions"
  />
  <!-- output will be: "'中文'" -->
  <v-intl-display-names
    wrapper="w-full"
    :payload="'zh'"
    :format="formatOptions"
  />
  <!-- output will be: "'德文'" -->
  <v-intl-display-names
    wrapper="w-full"
    :payload="'de'"
    :format="formatOptions"
  />
</template>
<script>
  import { VIntlDisplayNames } from '@vinayakkulkarni/v-intl';
  export default {
    name: 'YourAwesomeComponent',
    components: {
      VIntlDisplayNames,
    },
    data() {
      return {
        formatOptions: {
          locales: 'zh-Hant',
          options: { type: 'language' }
        }
      };
    },
  };
</script>
```

### Get currency names in Simplified Chinese
```vue
<template>
  <!-- output will be: "'美元'" -->
  <v-intl-display-names
    wrapper="w-full"
    :payload="'USD'"
    :format="formatOptions"
  />
  <!-- output will be: "'欧元'" -->
  <v-intl-display-names
    wrapper="w-full"
    :payload="'EUR'"
    :format="formatOptions"
  />
  <!-- output will be: "'日元'" -->
  <v-intl-display-names
    wrapper="w-full"
    :payload="'JPY'"
    :format="formatOptions"
  />
  <!-- output will be: "'人民币'" -->
  <v-intl-display-names
    wrapper="w-full"
    :payload="'CNY'"
    :format="formatOptions"
  />
</template>
<script>
  import { VIntlDisplayNames } from '@vinayakkulkarni/v-intl';
  export default {
    name: 'YourAwesomeComponent',
    components: {
      VIntlDisplayNames,
    },
    data() {
      return {
        formatOptions: {
          locales: 'zh-Hans',
          options: { type: 'currency' }
        }
      };
    },
  };
</script>
```

### Get the final supported type, scripts, in English
```vue
<template>
  <!-- output will be: "'Latin'" -->
  <v-intl-display-names
    wrapper="w-full"
    :payload="'Latn'"
    :format="formatOptions"
  />
  <!-- output will be: "'Arabic'" -->
  <v-intl-display-names
    wrapper="w-full"
    :payload="'Arab'"
    :format="formatOptions"
  />
  <!-- output will be: "'Katakana'" -->
  <v-intl-display-names
    wrapper="w-full"
    :payload="'Kana'"
    :format="formatOptions"
  />
</template>
<script>
  import { VIntlDisplayNames } from '@vinayakkulkarni/v-intl';
  export default {
    name: 'YourAwesomeComponent',
    components: {
      VIntlDisplayNames,
    },
    data() {
      return {
        formatOptions: {
          locales: 'en',
          options: { type: 'script' }
        }
      };
    },
  };
</script>
```

### Example using formatOptions.options.style
```vue
<template>
  <!-- output will be: "'American English'" -->
  <v-intl-display-names
    wrapper="w-full"
    :payload="'en-US'"
    :format="formatOptions"
  />
</template>
<script>
  import { VIntlDisplayNames } from '@vinayakkulkarni/v-intl';
  export default {
    name: 'YourAwesomeComponent',
    components: {
      VIntlDisplayNames,
    },
    data() {
      return {
        formatOptions: {
          locales: 'en',
          options: { type: 'language' }
        }
      };
    },
  };
</script>
```

```vue
<template>
  <!-- output will be: "'US English'" -->
  <v-intl-display-names
    wrapper="w-full"
    :payload="'en-US'"
    :format="formatOptions"
  />
</template>
<script>
  import { VIntlDisplayNames } from '@vinayakkulkarni/v-intl';
  export default {
    name: 'YourAwesomeComponent',
    components: {
      VIntlDisplayNames,
    },
    data() {
      return {
        formatOptions: {
          locales: 'en',
          options: { type: 'language', style: 'short' }
        }
      };
    },
  };
</script>
```

```vue
<template>
  <!-- output will be: "'US English'" -->
  <v-intl-display-names
    wrapper="w-full"
    :payload="'en-US'"
    :format="formatOptions"
  />
</template>
<script>
  import { VIntlDisplayNames } from '@vinayakkulkarni/v-intl';
  export default {
    name: 'YourAwesomeComponent',
    components: {
      VIntlDisplayNames,
    },
    data() {
      return {
        formatOptions: {
          locales: 'en',
          options: { type: 'language', style: 'narrow' }
        }
      };
    },
  };
</script>
```