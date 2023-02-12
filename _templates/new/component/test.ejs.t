---
to: src/components/<%= name %>.test.ts
---

import { describe, expect, test, beforeEach } from 'vitest';
import { mount, type MountingOptions, VueWrapper } from '@vue/test-utils';
import { faker } from '@faker-js/faker';
import { produce } from 'immer';
import <%= name %> from './<%= name %>.vue';

describe('<%= name %>', () => {
  let wrapper: VueWrapper<InstanceType<typeof <%= name %>>>;
  let options: MountingOptions<any, {}>;
  const mountComponent = () => {
    wrapper = mount(<%= name %>, options);
  };

  beforeEach(() => {
    options = {
      shallow: true,
    };

    mountComponent();
  });
});
