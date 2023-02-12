import { describe, expect, test, beforeEach } from 'vitest';
import { mount, type MountingOptions, VueWrapper } from '@vue/test-utils';
import { faker } from '@faker-js/faker';
import { produce } from 'immer';
import VButton from './VButton.vue';

describe('VButton', () => {
  let wrapper: VueWrapper<InstanceType<typeof VButton>>;
  let options: MountingOptions<any, {}>;
  const mountComponent = () => {
    wrapper = mount(VButton, options);
  };

  beforeEach(() => {
    options = {
      shallow: true,
    };

    mountComponent();
  });

  test('tag is button by default', () => {
    expect(wrapper.element.tagName).toBe('button'.toUpperCase());
  });

  test('tag can be defined from props', () => {
    const tag = faker.lorem.word();

    options = produce(options, (draft) => {
      draft.props = {
        tag,
      };
    });

    mountComponent();

    expect(wrapper.element.tagName).toBe(tag.toUpperCase());
  });

  test.todo('test for button type');

  test('default slot is empty by default', () => {
    expect(wrapper.html()).toContain('');
  });

  test('has default slot', () => {
    const text = faker.lorem.sentence();

    options = produce(options, (draft) => {
      draft.slots = {
        default: text,
      };
    });

    mountComponent();

    expect(wrapper.text()).toContain(text);
  });
});
