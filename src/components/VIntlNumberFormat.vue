<script setup lang="ts">
  import { computed } from 'vue';
  import type { RequiredOptions } from '../types';

  type FormatOptions = RequiredOptions & {
    options: Intl.NumberFormatOptions;
  };

  const payload = defineModel<number>('payload', {
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

  const formattedNumbers = computed(() => {
    const numbers = new Intl.NumberFormat(
      format.value.locales,
      format.value.options,
    );
    return toParts.value
      ? numbers.formatToParts(payload.value)
      : numbers.format(payload.value);
  });
</script>

<template>
  <div :class="wrapper">
    {{ formattedNumbers }}
  </div>
</template>
