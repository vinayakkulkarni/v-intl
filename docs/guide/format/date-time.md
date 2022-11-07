---
title: 'V-Intl :: Date & time formatting'
description: 'Date & time Intl formatter for your Vue apps'
---

# Date & time formatting 🧪

The [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) object is a constructor for objects that enable language-sensitive date and time formatting.

## Usage examples

### Get Region Names in English

```vue
<template>
  <!-- output will be: "'12/20/2012'" -->
  <v-intl-date-time-format
    wrapper="w-full"
    :payload="payload"
    :format="{ locales: 'en-US' }"
  />
  <!-- output will be: "'20/12/2012'" -->
  <v-intl-date-time-format
    wrapper="w-full"
    :payload="payload"
    :format="{ locales: 'en-GB' }"
  />
  <!--
    Include a fallback language, in this case Indonesian 
    output will be: "'20/12/2012'"
  -->
  <v-intl-date-time-format
    wrapper="w-full"
    :payload="payload"
    :format="{ locales: ['ban', 'id'] }"
  />
  <!-- output will be: "'١٩‏/١٢‏/٢٠١٢'" -->
  <v-intl-date-time-format
    wrapper="w-full"
    :payload="payload"
    :format="{ locales: 'ar-EG' }"
  />
</template>
<script>
  import { VIntlDateTimeFormat } from '@vinayakkulkarni/v-intl';
  export default {
    name: 'YourAwesomeComponent',
    components: {
      VIntlDateTimeFormat,
    },
    data() {
      return {
        payload: new Date(Date.UTC(2012, 11, 20, 3, 0, 0)),
      };
    },
  };
</script>
```

### Using `format.options`

```vue
<template>
  <!-- output will be: "'Donnerstag, 20. Dezember 2012'" -->
  <v-intl-date-time-format
    wrapper="w-full"
    :payload="payload"
    :format="format"
  />
</template>
<script>
  import { VIntlDateTimeFormat } from '@vinayakkulkarni/v-intl';
  export default {
    name: 'YourAwesomeComponent',
    components: {
      VIntlDateTimeFormat,
    },
    data() {
      return {
        payload: new Date(Date.UTC(2012, 11, 20, 3, 0, 0, 200)),
        format: {
          locales: 'de-DE',
          options: {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          },
        },
      };
    },
  };
</script>
```

### UTC visible example

```vue
<template>
  <!-- output will be: "'Thursday, December 20, 2012, GMT'" -->
  <v-intl-date-time-format
    wrapper="w-full"
    :payload="payload"
    :format="format"
  />
</template>
<script>
  import { VIntlDateTimeFormat } from '@vinayakkulkarni/v-intl';
  export default {
    name: 'YourAwesomeComponent',
    components: {
      VIntlDateTimeFormat,
    },
    data() {
      return {
        payload: new Date(Date.UTC(2012, 11, 20, 3, 0, 0, 200)),
        format: {
          locales: 'en-US',
          options: {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'UTC',
            timeZoneName: 'short',
          },
        },
      };
    },
  };
</script>
```

### More precision

```vue
<template>
  <!-- output will be: "'2:00:00 pm AEDT'" -->
  <v-intl-date-time-format
    wrapper="w-full"
    :payload="payload"
    :format="format"
  />
</template>
<script>
  import { VIntlDateTimeFormat } from '@vinayakkulkarni/v-intl';
  export default {
    name: 'YourAwesomeComponent',
    components: {
      VIntlDateTimeFormat,
    },
    data() {
      return {
        payload: new Date(Date.UTC(2012, 11, 20, 3, 0, 0, 200)),
        format: {
          locales: 'en-AU',
          options: {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZone: 'Australia/Sydney',
            timeZoneName: 'short',
          },
        },
      };
    },
  };
</script>
```

### Period of the day

```vue
<template>
  <!-- output will be: "'10 at night'" -->
  <v-intl-date-time-format
    wrapper="w-full"
    :payload="payload"
    :format="format"
  />
</template>
<script>
  import { VIntlDateTimeFormat } from '@vinayakkulkarni/v-intl';
  export default {
    name: 'YourAwesomeComponent',
    components: {
      VIntlDateTimeFormat,
    },
    data() {
      return {
        payload: new Date(Date.UTC(2012, 11, 20, 3, 0, 0, 200)),
        format: {
          locales: 'en-US',
          options: {
            hour: 'numeric',
            dayPeriod: 'short',
          },
        },
      };
    },
  };
</script>
```
