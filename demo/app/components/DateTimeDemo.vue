<script setup lang="ts">
  import { VIntlDateTimeFormat } from '@vinayakkulkarni/v-intl';
  import { snippet } from '~/utils/locales';

  const props = defineProps<{ locale: string }>();

  // A fixed instant plus an explicit time zone: the server and the browser
  // render the same string, so hydration never mismatches.
  const INSTANT = '2026-10-24T09:30:00Z';
  const STYLES = ['full', 'long', 'medium', 'short'] as const;
  const ZONES = [
    'UTC',
    'Asia/Kolkata',
    'America/New_York',
    'Asia/Tokyo',
  ] as const;
  const dateStyle = ref<(typeof STYLES)[number]>('full');
  const timeZone = ref<(typeof ZONES)[number]>('Asia/Kolkata');

  const payload = new Date(INSTANT);
  const options = computed<Intl.DateTimeFormatOptions>(() => ({
    dateStyle: dateStyle.value,
    timeStyle: 'short',
    timeZone: timeZone.value,
  }));
  const format = computed(() => ({
    locales: props.locale,
    options: options.value,
  }));
  const code = computed(() =>
    snippet(
      'VIntlDateTimeFormat',
      `:payload="new Date('${INSTANT}')"`,
      props.locale,
      { ...options.value },
    ),
  );
</script>

<template>
  <FormatSection
    id="date-time"
    index="02"
    title="Dates and times"
    tag="<VIntlDateTimeFormat>"
    mdn="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat"
    :code="code"
  >
    <template #description>
      One instant, written the way each locale reads it, in any IANA time zone.
    </template>
    <template #controls>
      <ChoiceGroup
        v-model="dateStyle"
        label="dateStyle"
        :options="STYLES"
        component="date-time"
      />
      <ChoiceGroup
        v-model="timeZone"
        label="timeZone"
        :options="ZONES"
        component="date-time"
      />
    </template>
    <VIntlDateTimeFormat :payload="payload" :format="format" />
  </FormatSection>
</template>
