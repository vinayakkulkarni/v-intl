<script setup lang="ts">
  const props = defineProps<{ repo: string; npm: string }>();
  const LINK =
    'underline decoration-rule underline-offset-4 hover:text-ink hover:decoration-ink-3';
</script>

<template>
  <footer
    class="flex flex-col gap-3 border-t border-rule px-5 py-8 font-mono text-xs text-ink-3 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12"
  >
    <p>MIT licensed · © 2019–present Vinayak Kulkarni</p>
    <p class="flex gap-4">
      <OutboundLink :href="props.repo" section="footer" :class="LINK"
        >GitHub</OutboundLink
      >
      <OutboundLink :href="props.npm" section="footer" :class="LINK"
        >npm</OutboundLink
      >
      <OutboundLink
        href="https://vinayakkulkarni.dev"
        section="footer"
        :class="LINK"
      >
        vinayakkulkarni.dev
      </OutboundLink>
    </p>
  </footer>
</template>
