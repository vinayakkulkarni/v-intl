<script setup lang="ts">
  const props = defineProps<{ repo: string; npm: string }>();
  const LINK =
    'inline-flex h-9 items-center gap-2 border border-rule px-3 font-mono text-xs text-ink-2 transition-colors hover:border-ink-3 hover:text-ink';
</script>

<template>
  <header
    class="flex h-16 shrink-0 items-center justify-between gap-4 px-5 sm:px-8 lg:px-12"
  >
    <p class="font-mono text-sm text-ink">
      v-intl<span class="text-accent">.</span>
    </p>
    <nav class="flex items-center gap-2" aria-label="Project">
      <OutboundLink :href="props.npm" section="header" :class="LINK">
        <span>npm</span>
      </OutboundLink>
      <OutboundLink
        :href="props.repo"
        section="header"
        :class="LINK"
        aria-label="GitHub"
      >
        <GithubIcon />
        <span class="hidden sm:inline">GitHub</span>
      </OutboundLink>
      <ThemeToggle />
    </nav>
  </header>
</template>
