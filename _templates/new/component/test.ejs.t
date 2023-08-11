---
to: src/<%= folder %>/<%= name %>/<%= name %>.test.ts
---

import { mount, VueWrapper } from '@vue/test-utils';
import { <%= name %>, type <%= name %>Props } from '.';
import { faker } from '@faker-js/faker';

const defaultProps: <%= name %>Props = {};

describe('<%= name %>', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(<%= name %>, { shallow: true, props: defaultProps });
  });

  test.todo('Example', () => {});
});

