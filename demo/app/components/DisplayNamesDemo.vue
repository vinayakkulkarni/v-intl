<script setup lang="ts">
  import { VIntlDisplayNames } from '@vinayakkulkarni/v-intl';
  import { payloadAttr, snippet } from '~/utils/locales';

  const props = defineProps<{ locale: string }>();

  const CODES = {
    region: ['IN', 'DE', 'JP', 'EG', 'BR'],
    language: ['hi', 'de', 'ja', 'ar', 'pt-BR'],
    currency: ['INR', 'EUR', 'JPY', 'EGP', 'BRL'],
    script: ['Deva', 'Latn', 'Jpan', 'Arab', 'Cyrl'],
  } as const;
  const TYPES = ['region', 'language', 'currency', 'script'] as const;
  const type = ref<(typeof TYPES)[number]>('region');

  const options = computed<Intl.DisplayNamesOptions>(() => ({
    type: type.value,
  }));
  const format = computed(() => ({
    locales: props.locale,
    options: options.value,
  }));
  const code = computed(() =>
    snippet(
      'VIntlDisplayNames',
      payloadAttr(CODES[type.value][0]),
      props.locale,
      {
        ...options.value,
      },
    ),
  );
</script>

<template>
  <FormatSection
    id="display-names"
    index="05"
    title="Display names"
    tag="<VIntlDisplayNames>"
    mdn="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames"
    :code="code"
  >
    <template #description>
      Turns region, language, currency and script codes into names, written in
      the reader’s language.
    </template>
    <template #controls>
      <ChoiceGroup
        v-model="type"
        label="type"
        :options="TYPES"
        component="display-names"
      />
    </template>
    <ul class="grid gap-x-6 gap-y-2 sm:grid-cols-2">
      <li
        v-for="item in CODES[type]"
        :key="item"
        class="flex min-w-0 items-baseline gap-3"
      >
        <span class="w-14 shrink-0 font-mono text-xs font-normal text-ink-3">{{
          item
        }}</span>
        <VIntlDisplayNames :payload="item" :format="format" wrapper="min-w-0" />
      </li>
    </ul>
  </FormatSection>
</template>
