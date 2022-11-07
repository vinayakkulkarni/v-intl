<template>
  <div :class="wrapper">
    {{ intlListFormat }}
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent } from 'vue';
  import type { PropType } from 'vue';

  export default defineComponent({
    name: 'VIntlListFormat',
    props: {
      wrapper: {
        type: String,
        required: false,
        default: '',
      },
      payload: {
        type: Array as PropType<Iterable<string>>,
        required: true,
      },
      format: {
        type: Object,
        required: true,
        default: () => ({
          locales: 'en-US',
          options: {},
        }),
      },
      toParts: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
    setup(props) {
      const intlListFormat = computed(() => {
        if (props.toParts) {
          return new Intl.ListFormat(
            props.format.locales,
            props.format.options,
          ).formatToParts(props.payload);
        }
        return new Intl.ListFormat(
          props.format.locales,
          props.format.options,
        ).format(props.payload);
      });
      return {
        intlListFormat,
      };
    },
  });
</script>
