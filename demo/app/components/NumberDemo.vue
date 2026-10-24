<script setup lang="ts">
  import { VIntlNumberFormat } from '@vinayakkulkarni/v-intl';
  import { payloadAttr, snippet } from '~/utils/locales';

  const props = defineProps<{ locale: string }>();

  const STYLES = ['currency', 'decimal', 'percent', 'compact', 'unit'] as const;
  const CURRENCIES = ['INR', 'EUR', 'USD', 'JPY'] as const;
  const style = ref<(typeof STYLES)[number]>('currency');
  const currency = ref<(typeof CURRENCIES)[number]>('INR');

  const payload = computed(() =>
    style.value === 'percent' ? 0.4275 : 1234567.891,
  );
  const options = computed<Intl.NumberFormatOptions>(() => {
    switch (style.value) {
      case 'currency':
        return { style: 'currency', currency: currency.value };
      case 'percent':
        return { style: 'percent', maximumFractionDigits: 1 };
      case 'compact':
        return { notation: 'compact', compactDisplay: 'long' };
      case 'unit':
        return { style: 'unit', unit: 'kilometer-per-hour' };
      case 'decimal':
        return { maximumFractionDigits: 2 };
    }
  });
  const format = computed(() => ({
    locales: props.locale,
    options: options.value,
  }));
  const code = computed(() =>
    snippet('VIntlNumberFormat', payloadAttr(payload.value), props.locale, {
      ...options.value,
    }),
  );
</script>

<template>
  <FormatSection
    id="number"
    index="01"
    title="Numbers and currency"
    tag="<VIntlNumberFormat>"
    mdn="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat"
    :code="code"
  >
    <template #description>
      Grouping, decimals, currency symbols, percentages, compact and unit
      notation, all from
      <code class="font-mono text-sm">Intl.NumberFormat</code>.
    </template>
    <template #controls>
      <ChoiceGroup
        v-model="style"
        label="style"
        :options="STYLES"
        component="number"
      />
      <ChoiceGroup
        v-if="style === 'currency'"
        v-model="currency"
        label="currency"
        :options="CURRENCIES"
        component="number"
      />
    </template>
    <VIntlNumberFormat :payload="payload" :format="format" />
  </FormatSection>
</template>
