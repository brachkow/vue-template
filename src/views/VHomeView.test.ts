import { describe, expect, test, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import type { VueWrapper } from '@vue/test-utils';
import VHomeView from './VHomeView.vue';

const defaultProps = {};

describe('VHomeView', () => {
  let wrapper: VueWrapper<InstanceType<typeof VHomeView>>;

  beforeEach(() => {
    wrapper = mount(VHomeView, { shallow: true, props: defaultProps });
  });

  test('renders hello world', () => {
    expect(wrapper.text()).toContain('Hello World!');
  });
});
