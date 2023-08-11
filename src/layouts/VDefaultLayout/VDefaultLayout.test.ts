import { mount, VueWrapper } from '@vue/test-utils';
import { VDefaultLayout, type VDefaultLayoutProps } from '.';
import { faker } from '@faker-js/faker';
import { useTitle } from '@vueuse/core';

const SLOT_CONTENT = faker.string.uuid();
const TITLE = faker.string.uuid();

const defaultProps: VDefaultLayoutProps = {
  title: TITLE,
};

vi.mock('@vueuse/core', () => ({ useTitle: vi.fn() }));

describe('VDefaultLayout', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(VDefaultLayout, {
      slots: { default: SLOT_CONTENT },
      shallow: true,
      props: defaultProps,
    });
  });

  test('has default slot', () => {
    expect(wrapper.text()).toContain(SLOT_CONTENT);
  });

  test('sets title on mount', () => {
    expect(useTitle).toHaveBeenCalledWith(TITLE);
  });
});
