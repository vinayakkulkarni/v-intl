import type { App as Application, Plugin } from 'vue';
import VIntlNumberFormat from './components/VIntlNumberFormat.vue';
import VIntlListFormat from './components/VIntlListFormat.vue';
import VIntlDateTimeFormat from './components/VIntlDateTimeFormat.vue';
import VIntlDisplayNames from './components/VIntlDisplayNames.vue';
import VIntlDurationFormat from './components/VIntlDurationFormat.vue';
import VIntlRelativeTimeFormat from './components/VIntlRelativeTimeFormat.vue';

let installed = false;

const install: Exclude<Plugin['install'], undefined> = (app: Application) => {
  if (!installed) {
    app.component('VIntlNumberFormat', VIntlNumberFormat);
    app.component('VIntlListFormat', VIntlListFormat);
    app.component('VIntlDateTimeFormat', VIntlDateTimeFormat);
    app.component('VIntlDisplayNames', VIntlDisplayNames);
    app.component('VIntlDurationFormat', VIntlDurationFormat);
    app.component('VIntlRelativeTimeFormat', VIntlRelativeTimeFormat);
    installed = true;
  }
};

export default install;
