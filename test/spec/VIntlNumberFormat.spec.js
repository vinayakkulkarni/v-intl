import { mount, createLocalVue } from '@vue/test-utils';
import test from 'ava';
import VIntlNumberFormat from '../../src/VIntlNumberFormat.vue';

let wrapper;
const localVue = createLocalVue();

test.beforeEach(() => {
  wrapper = mount(VIntlNumberFormat, {
    localVue,
  });
});

test('is a Vue instance', (t) => {
  t.is(wrapper.isVueInstance(), true);
});

test('renders correct snapshot', (t) => {
  t.snapshot(wrapper.vm.$el.outerHTML);
});
