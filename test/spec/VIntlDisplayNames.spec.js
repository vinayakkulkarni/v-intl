import { mount, createLocalVue } from '@vue/test-utils';
import test from 'ava';
import VIntlDisplayNames from '../../src/VIntlDisplayNames.vue';

let wrapper;
const localVue = createLocalVue();

test.beforeEach(() => {
  wrapper = mount(VIntlDisplayNames, {
    localVue,
  });
});

test('is a Vue instance', (t) => {
  t.is(wrapper.isVueInstance(), true);
});

test('renders correct snapshot', (t) => {
  t.snapshot(wrapper.vm.$el.outerHTML);
});
