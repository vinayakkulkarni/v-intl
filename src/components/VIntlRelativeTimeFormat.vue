<script setup lang="ts">
  import { computed } from 'vue';
  import type { RequiredOptions } from '../types';

  type FormatOptions = RequiredOptions & {
    options: Intl.RelativeTimeFormatOptions;
  };

  const payload = defineModel<{
    number: 1;
    time: 'days';
  }>('payload', {
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

  const formattedRelativeTime = computed(() => {
    return new Intl.RelativeTimeFormat(
      format.value.locales,
      format.value.options,
    ).format(payload.value.number, payload.value.time);
  });
</script>

<template>
  <div :class="wrapper">
    {{ formattedRelativeTime }}
  </div>
</template>
