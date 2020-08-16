<template>
  <div :class="wrapper">
    {{ intlListFormat }}
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent } from '@vue/composition-api';
  export default defineComponent({
    name: 'v-intl-list-format',
    props: {
      wrapper: {
        type: String,
        required: false,
        default: '',
      },
      payload: {
        type: Array,
        required: true,
      },
      format: {
        type: Object,
        required: true,
        default: () => ({
          /**
           * Can be string or array with fallback
           * read more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation
           */
          locales: 'en-US',
          /**
           * Has to be a object with ListFormat options
           * read more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat
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
      const intlListFormat = computed(() => {
        if (toParts) {
          return new Intl.ListFormat(
            format.locales,
            format.options,
          ).formatToParts(payload);
        }
        return new Intl.ListFormat(format.locales, format.options).format(
          payload,
        );
      });
      return {
        intlListFormat,
      };
    },
  });
</script>
