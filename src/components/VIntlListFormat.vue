<script setup lang="ts">
  import { computed, defineModel } from 'vue';
  import type { RequiredOptions } from '../types';

  type FormatOptions = RequiredOptions & {
    options: Intl.ListFormatOptions;
  };

  const payload = defineModel<string>('payload', {
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

  const formattedList = computed(() => {
    const list = new Intl.ListFormat(
      format.value.locales,
      format.value.options,
    );
    return toParts.value
      ? list.formatToParts(payload.value)
      : list.format(payload.value);
  });
</script>

<template>
  <div :class="wrapper">
    {{ formattedList }}
  </div>
</template>
