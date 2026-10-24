<script setup lang="ts">
  import { VIntlNumberFormat } from '@vinayakkulkarni/v-intl';

  const REPO = 'https://github.com/vinayakkulkarni/v-intl';
  const NPM = 'https://www.npmjs.com/package/@vinayakkulkarni/v-intl';
  const SITE = 'https://v-intl.vinayakkulkarni.dev';
  const INSTALL = 'pnpm add @vinayakkulkarni/v-intl';
  const DESCRIPTION =
    'Number, date, relative time, list, display name and duration formatting for Vue 3, built on the native Intl API.';

  const locale = ref('en-IN');
  const heroFormat = computed(() => ({
    locales: locale.value,
    options: { maximumFractionDigits: 2 },
  }));

  useSeoMeta({
    ogType: 'website',
    ogUrl: `${SITE}/`,
    ogTitle: 'v-intl — native Intl formatting for Vue 3',
    ogDescription: DESCRIPTION,
    twitterCard: 'summary',
  });

  useHead({
    link: [{ rel: 'canonical', href: `${SITE}/` }],
    meta: [
      {
        name: 'theme-color',
        content: '#f8f6f1',
        media: '(prefers-color-scheme: light)',
      },
      {
        name: 'theme-color',
        content: '#14161c',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  });
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <SiteHeader :repo="REPO" :npm="NPM" />

    <main class="flex flex-1 flex-col">
      <section
        aria-labelledby="hero-title"
        class="flex min-h-[calc(100dvh-4rem)] flex-col justify-center gap-8 px-5 pb-12 sm:px-8 lg:px-12"
      >
        <div>
          <h1
            id="hero-title"
            class="max-w-[30ch] text-lg leading-relaxed text-ink-2 sm:text-xl"
          >
            <span class="font-medium text-ink">v-intl</span> formats numbers,
            dates, lists and names for Vue 3 with the browser’s own
            <code class="font-mono text-base">Intl</code> API. No message files,
            no runtime.
          </h1>
        </div>

        <VIntlNumberFormat
          :payload="1234567.89"
          :format="heroFormat"
          wrapper="font-display text-[clamp(3rem,13vw,10.5rem)] leading-[0.9] font-semibold tracking-tight [overflow-wrap:anywhere] text-ink"
          aria-live="polite"
        />

        <LocalePicker v-model="locale" />

        <div
          class="grid max-w-2xl gap-3 sm:grid-cols-[1fr_auto] sm:items-center"
        >
          <CopyCommand :command="INSTALL" />
          <a
            href="#number"
            class="inline-flex h-11 items-center justify-center border border-ink bg-ink px-5 font-mono text-xs text-paper transition-opacity hover:opacity-85"
          >
            Try every component ↓
          </a>
        </div>
      </section>

      <NumberDemo :locale="locale" />
      <DateTimeDemo :locale="locale" />
      <RelativeTimeDemo :locale="locale" />
      <ListDemo :locale="locale" />
      <DisplayNamesDemo :locale="locale" />
      <DurationDemo :locale="locale" />
    </main>

    <SiteFooter :repo="REPO" :npm="NPM" />
  </div>
</template>
