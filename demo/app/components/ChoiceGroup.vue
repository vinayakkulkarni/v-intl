<script setup lang="ts" generic="T extends string">
  import type { DemoComponent } from '~/types/analytics';

  const props = defineProps<{
    label: string;
    options: readonly T[];
    component: DemoComponent;
  }>();
  const model = defineModel<T>({ required: true });
  const { track } = useAnalytics();

  function pick(value: T) {
    if (value === model.value) return;
    model.value = value;
    track('demo_interaction', {
      component: props.component,
      control: props.label,
      value,
    });
  }
</script>

<template>
  <fieldset class="min-w-0">
    <legend
      class="mb-2 font-mono text-label tracking-wide text-ink-3 uppercase"
    >
      {{ props.label }}
    </legend>
    <div class="flex flex-wrap gap-1.5">
      <button
        v-for="option in props.options"
        :key="option"
        type="button"
        :aria-pressed="option === model"
        class="h-8 border px-2.5 font-mono text-xs transition-colors"
        :class="
          option === model
            ? 'border-ink bg-ink text-paper'
            : 'border-rule text-ink-2 hover:border-ink-3 hover:text-ink'
        "
        @click="pick(option)"
      >
        {{ option }}
      </button>
    </div>
  </fieldset>
</template>
