<template>
  <div :class="wrapper">
    {{ intlRelativeTimeFormat }}
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent } from 'vue';
  export default defineComponent({
    name: 'VIntlRelativeTimeFormat',
    props: {
      wrapper: {
        type: String,
        required: false,
        default: '',
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
    setup(props) {
      const intlRelativeTimeFormat = computed(() => {
        return new Intl.RelativeTimeFormat(
          props.format.locales,
          props.format.options,
        ).format(props.payload.number, props.payload.time);
      });
      return {
        intlRelativeTimeFormat,
      };
    },
  });
</script>
