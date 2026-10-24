<script setup lang="ts">
  import { VIntlDurationFormat } from '@vinayakkulkarni/v-intl';
  import { payloadAttr, snippet } from '~/utils/locales';

  const props = defineProps<{ locale: string }>();

  const STYLES = ['long', 'short', 'narrow', 'digital'] as const;
  const style = ref<(typeof STYLES)[number]>('long');

  const payload = { hours: 2, minutes: 46, seconds: 40 };
  const options = computed(() => ({ style: style.value }));
  const format = computed(() => ({
    locales: props.locale,
    options: options.value,
  }));
  const code = computed(() =>
    snippet('VIntlDurationFormat', payloadAttr(payload), props.locale, {
      ...options.value,
    }),
  );
</script>

<template>
  <FormatSection
    id="duration"
    index="06"
    title="Durations"
    tag="<VIntlDurationFormat>"
    mdn="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat"
    :code="code"
  >
    <template #description>
      Hours, minutes and seconds as words or as a clock. Ships a FormatJS
      polyfill for browsers without
      <code class="font-mono text-sm">Intl.DurationFormat</code>.
    </template>
    <template #controls>
      <ChoiceGroup
        v-model="style"
        label="style"
        :options="STYLES"
        component="duration"
      />
    </template>
    <VIntlDurationFormat :payload="payload" :format="format" />
  </FormatSection>
</template>
