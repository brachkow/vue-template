import { describe, expect, test, beforeEach } from 'vitest';
import { mount, type MountingOptions } from '@vue/test-utils';
import type { VueWrapper } from '@vue/test-utils';
import VLoading from './VLoading.vue';

describe('VLoading', () => {
  let wrapper: VueWrapper<InstanceType<typeof VLoading>>;
  let options: MountingOptions<any, {}>;
  const mountComponent = () => {
    wrapper = mount(VLoading, options);
  };

  beforeEach(() => {
    options = {
      shallow: true,
    };

    mountComponent();
  });

  const getLabelWrapper = () => wrapper.find('[data-test="label"]');
  const getPulseWrapper = () => wrapper.find('[data-test="pulse"]');

  test('should render the component', () => {
    expect(getPulseWrapper().exists()).toBe(true);
    expect(getLabelWrapper().exists()).toBe(true);
  });
});
