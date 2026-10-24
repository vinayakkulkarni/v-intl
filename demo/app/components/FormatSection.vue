<script setup lang="ts">
  const props = defineProps<{
    id: string;
    index: string;
    title: string;
    tag: string;
    mdn: string;
    code: string;
  }>();
</script>

<template>
  <section
    :id="props.id"
    :aria-labelledby="`${props.id}-title`"
    class="grid gap-8 border-t border-rule px-5 py-14 sm:px-8 lg:grid-cols-12 lg:px-12"
  >
    <header class="lg:col-span-4">
      <p class="font-mono text-xs text-accent-ink">{{ props.index }}</p>
      <h2
        :id="`${props.id}-title`"
        class="mt-2 font-display text-section font-semibold tracking-tight"
      >
        {{ props.title }}
      </h2>
      <p class="mt-2 font-mono text-xs break-all text-ink-3">{{ props.tag }}</p>
      <p class="mt-4 max-w-blurb leading-relaxed text-ink-2">
        <slot name="description" />
      </p>
      <OutboundLink
        :href="props.mdn"
        section="docs"
        class="mt-4 inline-block font-mono text-xs text-ink-2 underline decoration-rule underline-offset-4 hover:text-ink hover:decoration-ink-3"
      >
        MDN reference ↗
      </OutboundLink>
    </header>
    <div class="flex min-w-0 flex-col gap-6 lg:col-span-8">
      <div class="flex flex-wrap gap-6">
        <slot name="controls" />
      </div>
      <div
        class="min-w-0 border-l-2 border-accent bg-paper-2 px-5 py-6 font-display text-output font-semibold break-words text-ink"
        aria-live="polite"
      >
        <slot />
      </div>
      <pre
        class="overflow-x-auto border border-rule px-4 py-3 font-mono text-xs leading-relaxed text-ink-2"
      ><code>{{ props.code }}</code></pre>
    </div>
  </section>
</template>
