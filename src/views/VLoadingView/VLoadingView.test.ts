import { mount, VueWrapper } from '@vue/test-utils';
import { VLoadingView } from '.';

describe('VLoadingView', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(VLoadingView, { shallow: true });
  });

  test('Renders message', () => {
    expect(wrapper.text()).toBe('Loading...');
  });
});
