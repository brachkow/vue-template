import { describe, expect, test, beforeEach } from 'vitest';
import { mount, type MountingOptions } from '@vue/test-utils';
import type { VueWrapper } from '@vue/test-utils';
import VCard from './VCard.vue';
import { faker } from '@faker-js/faker';
import { produce } from 'immer';

describe('VCard', () => {
  let wrapper: VueWrapper<InstanceType<typeof VCard>>;
  let options: MountingOptions<any, {}>;
  const mountComponent = () => {
    wrapper = mount(VCard, options);
  };

  beforeEach(() => {
    options = {
      shallow: true,
    };

    mountComponent();
  });

  test('tag is div by default', () => {
    expect(wrapper.element.tagName).toBe('div'.toUpperCase());
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
