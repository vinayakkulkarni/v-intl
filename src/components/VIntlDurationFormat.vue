<script setup lang="ts">
  import { computed } from 'vue';
  import { DurationFormat } from '@formatjs/intl-durationformat';
  import type {
    DurationFormatOptions,
    DurationInput,
  } from '@formatjs/intl-durationformat/src/types';

  type FormatOptions = {
    locales?: string | string[];
    options?: DurationFormatOptions;
  };

  const payload = defineModel<DurationInput>('payload', {
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

  const formattedDuration = computed(() => {
    const duration = new DurationFormat(
      format.value.locales,
      format.value.options,
    );
    return toParts.value
      ? duration.formatToParts(payload.value)
      : duration.format(payload.value);
  });
</script>

<template>
  <div :class="wrapper">
    {{ formattedDuration }}
  </div>
</template>
