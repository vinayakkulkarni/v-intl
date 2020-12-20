<template>
  <div :class="wrapper">
    {{ intlDisplayNames }}
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent } from 'vue';
  export default defineComponent({
    name: 'VIntlDisplayNames',
    props: {
      wrapper: {
        type: String,
        required: false,
        default: '',
      },
      payload: {
        /**
         * When format.options.type is "region", code must be either an ISO-3166 2-letter country code or a UN M49 3-digit region code.
         * When format.options.type is "language", code must be conform to Unicode's language identifier grammar.
         * When format.options.type is "currency", code must be a ISO-4217 3-letter currency code.
         * When format.options.type is "script", code must be a ISO-15924 4-letter script code.
         */
        type: String,
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
           * Has to be a object with DisplayNames options
           * read more: https://v8.dev/features/intl-displaynames#full-api
           */
          options: {},
        }),
      },
    },
    setup({ payload, format }) {
      const intlDisplayNames = computed(() => {
        const intlNames = new Intl.DisplayNames(
          [format.locales],
          format.options,
        );
        return intlNames.of(payload);
      });
      return {
        intlDisplayNames,
      };
    },
  });
</script>
