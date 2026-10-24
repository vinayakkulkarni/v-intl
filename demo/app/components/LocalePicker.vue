<script setup lang="ts">
  import { LOCALES } from '~/utils/locales';

  const locale = defineModel<string>({ required: true });
  const { track } = useAnalytics();

  function pick(value: string) {
    if (value === locale.value) return;
    locale.value = value;
    track('locale_changed', { locale: value });
  }
</script>

<template>
  <div role="radiogroup" aria-label="Locale" class="flex flex-wrap gap-2">
    <button
      v-for="option in LOCALES"
      :key="option.value"
      type="button"
      role="radio"
      :aria-checked="option.value === locale"
      class="h-9 border px-3 font-mono text-xs transition-colors"
      :class="
        option.value === locale
          ? 'border-accent bg-accent text-paper'
          : 'border-rule text-ink-2 hover:border-ink-3 hover:text-ink'
      "
      @click="pick(option.value)"
    >
      {{ option.label }}
    </button>
  </div>
</template>
