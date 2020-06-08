---
title: 'V-Intl :: List formatting'
description: 'List Intl formatter for your Vue apps'
---

# List formatting

This package enable language-sensitive list formatting using [`Intl.ListFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat) constructor.

## Usage example

### `conjunction`
```vue
<template>
  <!-- output will be: "Motorcycle, Bus, and Car" -->
  <v-intl-list-format
    wrapper="w-full"
    :payload="payload"
    :format="formatOptions"
  />
</template>
<script>
  import { VIntlListFormat } from '@vinayakkulkarni/v-intl';
  export default {
    name: 'YourAwesomeComponent',
    components: {
      VIntlListFormat,
    },
    data() {
      return {
        payload: ['Motorcycle', 'Bus', 'Car'],
        formatOptions: {
          locales: 'en', // any valid locale in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation
          options: { 
            style: 'long',
            type: 'conjunction' 
          }
        }
      };
    },
  };
</script>
```

### `disjunction`
```vue
<template>
  <!-- output will be: "Motorcycle, Bus or Car" -->
  <v-intl-list-format
    wrapper="w-full"
    :payload="payload"
    :format="formatOptions"
  />
</template>
<script>
  import { VIntlListFormat } from '@vinayakkulkarni/v-intl';
  export default {
    name: 'YourAwesomeComponent',
    components: {
      VIntlListFormat,
    },
    data() {
      return {
        payload: ['Motorcycle', 'Bus', 'Car'],
        formatOptions: {
          locales: 'en-GB', // any valid locale in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation
          options: { 
            style: 'short',
            type: 'disjunction' 
          }
        }
      };
    },
  };
</script>
```

### `unit`
```vue
<template>
  <!-- output will be: "Motorcycle Bus Car" -->
  <v-intl-list-format
    wrapper="w-full"
    :payload="payload"
    :format="formatOptions"
  />
</template>
<script>
  import { VIntlListFormat } from '@vinayakkulkarni/v-intl';
  export default {
    name: 'YourAwesomeComponent',
    components: {
      VIntlListFormat,
    },
    data() {
      return {
        payload: ['Motorcycle', 'Bus', 'Car'],
        formatOptions: {
          locales: 'en-GB', // any valid locale in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation
          options: { 
            style: 'narrow',
            type: 'unit' 
          }
        }
      };
    },
  };
</script>
```

### formatToParts
```vue
<template>
  <!-- output will be:
  [ 
    { "type": "element", "value": "Motorcycle" }, 
    { "type": "literal", "value": ", " }, 
    { "type": "element", "value": "Bus" },
    { "type": "literal", "value": ", and " },
    { "type": "element", "value": "Car" } 
  ];
  -->
  <v-intl-list-format
    wrapper="w-full"
    :to-parts="true"
    :payload="payload"
    :format="formatOptions"
  />
</template>
<script>
  import { VIntlListFormat } from '@vinayakkulkarni/v-intl';
  export default {
    name: 'YourAwesomeComponent',
    components: {
      VIntlListFormat,
    },
    data() {
      return {
        payload: ['Motorcycle', 'Bus', 'Car'],
        formatOptions: {
          locales: 'en', // any valid locale in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation
          options: { 
            style: 'long',
            type: 'conjunction' 
          }
        }
      };
    },
  };
</script>
```