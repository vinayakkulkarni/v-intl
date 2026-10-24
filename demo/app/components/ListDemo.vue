<script setup lang="ts">
  import { VIntlListFormat } from '@vinayakkulkarni/v-intl';
  import { payloadAttr, snippet } from '~/utils/locales';

  const props = defineProps<{ locale: string }>();

  const TYPES = ['conjunction', 'disjunction', 'unit'] as const;
  const STYLES = ['long', 'short', 'narrow'] as const;
  const type = ref<(typeof TYPES)[number]>('conjunction');
  const style = ref<(typeof STYLES)[number]>('long');

  const payload = ['Mumbai', 'Berlin', 'Tokyo', 'Cairo'];
  const options = computed<Intl.ListFormatOptions>(() => ({
    type: type.value,
    style: style.value,
  }));
  const format = computed(() => ({
    locales: props.locale,
    options: options.value,
  }));
  const code = computed(() =>
    snippet('VIntlListFormat', payloadAttr(payload), props.locale, {
      ...options.value,
    }),
  );
</script>

<template>
  <FormatSection
    id="list"
    index="04"
    title="Lists"
    tag="<VIntlListFormat>"
    mdn="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat"
    :code="code"
  >
    <template #description>
      Joins items with the right separators and the right “and” or “or” for the
      locale.
    </template>
    <template #controls>
      <ChoiceGroup
        v-model="type"
        label="type"
        :options="TYPES"
        component="list"
      />
      <ChoiceGroup
        v-model="style"
        label="style"
        :options="STYLES"
        component="list"
      />
    </template>
    <VIntlListFormat :payload="payload" :format="format" />
  </FormatSection>
</template>
