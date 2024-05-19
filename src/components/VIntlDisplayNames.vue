<script setup lang="ts">
  import { computed, defineModel } from 'vue';
  import type { RequiredOptions } from '../types';

  type FormatOptions = RequiredOptions & {
    options: Intl.DisplayNamesOptions;
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

  const intlDisplayNames = computed(() => {
    const intlNames = new Intl.DisplayNames(
      format.value.locales,
      format.value.options,
    );
    return intlNames.of(payload.value);
  });
</script>

<template>
  <div :class="wrapper">
    {{ intlDisplayNames }}
  </div>
</template>
