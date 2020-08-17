<template>
  <div :class="wrapper">
    {{ intlDateTime }}
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent } from '@vue/composition-api';
  export default defineComponent({
    name: 'v-intl-date-time-format',
    props: {
      wrapper: {
        type: String,
        required: false,
        default: '',
      },
      payload: {
        /**
         * The payload from output of new Date()
         */
        type: Object,
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
           * Has to be a object with DateTimeFormat options
           * read more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
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
      const intlDateTime = computed(() => {
        if (toParts) {
          return new Intl.DateTimeFormat(
            format.locales,
            format.options,
          ).formatToParts(payload);
        }
        return new Intl.DateTimeFormat(format.locales, format.options).format(
          payload,
        );
      });
      return {
        intlDateTime,
      };
    },
  });
</script>
