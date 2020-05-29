<template>
  <div :class="wrapper">
    {{ intlRelativeTimeFormat }}
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent } from '@vue/composition-api';
  export default defineComponent({
    name: 'v-intl-numberformat',
    props: {
      wrapper: {
        type: String,
        required: false,
      },
      payload: {
        type: Object,
        required: true,
        default: () => ({
          number: 1,
          time: 'days',
        }),
      },
      format: {
        type: Object,
        required: false,
        default: () => ({
          /**
           * Can be string or array with fallback
           * read more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation
           */
          locales: 'en-US',
          /**
           * Has to be a object with DateTimeFormat options
           * read more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat
           */
          options: {},
        }),
      },
    },
    setup({ payload, format }) {
      const intlRelativeTimeFormat = computed(() => {
        return new Intl.RelativeTimeFormat(
          format.locales,
          format.options,
        ).format(payload.number, payload.time);
      });
      return {
        intlRelativeTimeFormat,
      };
    },
  });
</script>
