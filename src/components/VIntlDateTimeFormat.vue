<script setup lang="ts">
  import { computed } from 'vue';
  import type { RequiredOptions } from '../types';

  type FormatOptions = RequiredOptions & {
    options: Intl.DateTimeFormatOptions;
  };

  const payload = defineModel<number | Date | undefined>('payload', {
    required: true,
  });

  const format = defineModel<FormatOptions>('format', {
    required: false,
    default: () => ({
      locales: 'en-US',
      options: {},
    }),
  });
  const wrapper = defineModel<string>('wrapper', {
    required: false,
    default: '',
  });
  const toParts = defineModel<boolean>('toParts', {
    required: false,
    default: false,
  });

  const formattedDateTime = computed(() => {
    const dateTime = new Intl.DateTimeFormat(
      format.value.locales,
      format.value.options,
    );
    return toParts.value
      ? dateTime.formatToParts(payload.value)
      : dateTime.format(payload.value);
  });
</script>

<template>
  <div :class="wrapper">
    {{ formattedDateTime }}
  </div>
</template>
