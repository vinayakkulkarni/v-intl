<template>
  <div :class="wrapper">
    {{ intlNumberFormat }}
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent } from 'vue';
  export default defineComponent({
    name: 'v-intl-number-format',
    props: {
      wrapper: {
        type: String,
        required: false,
      },
      payload: {
        type: Number,
        required: true,
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
           * Has to be a object with NumberFormat options
           * read more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
           */
          options: {},
        }),
      },
      toParts: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
    setup({ payload, format, toParts }) {
      const intlNumberFormat = computed(() => {
        if (toParts) {
          return new Intl.NumberFormat(
            format.locales,
            format.options,
          ).formatToParts(payload);
        }
        return new Intl.NumberFormat(format.locales, format.options).format(
          payload,
        );
      });
      return {
        intlNumberFormat,
      };
    },
  });
</script>
