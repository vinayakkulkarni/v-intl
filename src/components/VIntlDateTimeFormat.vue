<template>
  <div :class="wrapper">
    {{ intlDateTime }}
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent } from 'vue';
  import type { PropType } from 'vue';

  export default defineComponent({
    name: 'VIntlDateTimeFormat',
    props: {
      wrapper: {
        type: String,
        required: false,
        default: '',
      },
      payload: {
        type: Object as PropType<number | Date | undefined>,
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
    setup(props) {
      const intlDateTime = computed(() => {
        if (props.toParts) {
          return new Intl.DateTimeFormat(
            props.format.locales,
            props.format.options,
          ).formatToParts(props.payload);
        }
        return new Intl.DateTimeFormat(
          props.format.locales,
          props.format.options,
        ).format(props.payload);
      });
      return {
        intlDateTime,
      };
    },
  });
</script>
