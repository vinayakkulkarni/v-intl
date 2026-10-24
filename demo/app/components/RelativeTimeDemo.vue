<script setup lang="ts">
  import { VIntlRelativeTimeFormat } from '@vinayakkulkarni/v-intl';
  import { payloadAttr, snippet } from '~/utils/locales';

  const props = defineProps<{ locale: string }>();

  const VALUES = ['-2', '-1', '0', '1', '3'] as const;
  const UNITS = ['day', 'hour', 'week', 'month', 'year'] as const;
  const NUMERIC = ['auto', 'always'] as const;
  const value = ref<(typeof VALUES)[number]>('-1');
  const unit = ref<(typeof UNITS)[number]>('day');
  const numeric = ref<(typeof NUMERIC)[number]>('auto');

  const payload = computed(() => ({
    number: Number(value.value),
    time: unit.value,
  }));
  const options = computed<Intl.RelativeTimeFormatOptions>(() => ({
    numeric: numeric.value,
  }));
  const format = computed(() => ({
    locales: props.locale,
    options: options.value,
  }));
  const code = computed(() =>
    snippet(
      'VIntlRelativeTimeFormat',
      payloadAttr(payload.value),
      props.locale,
      {
        ...options.value,
      },
    ),
  );
</script>

<template>
  <FormatSection
    id="relative-time"
    index="03"
    title="Relative time"
    tag="<VIntlRelativeTimeFormat>"
    mdn="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat"
    :code="code"
  >
    <template #description>
      “Yesterday”, “in 3 weeks”, “2 hours ago”. Set
      <code class="font-mono text-sm">numeric: 'auto'</code> for the words
      people say.
    </template>
    <template #controls>
      <ChoiceGroup
        v-model="value"
        label="number"
        :options="VALUES"
        component="relative-time"
      />
      <ChoiceGroup
        v-model="unit"
        label="unit"
        :options="UNITS"
        component="relative-time"
      />
      <ChoiceGroup
        v-model="numeric"
        label="numeric"
        :options="NUMERIC"
        component="relative-time"
      />
    </template>
    <VIntlRelativeTimeFormat :payload="payload" :format="format" />
  </FormatSection>
</template>
