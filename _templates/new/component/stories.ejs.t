---
to: src/components/<%= name %>.stories.ts
---

import type { Meta, StoryObj } from '@storybook/vue3';
import <%= name %> from '@/components/<%= name %>.vue';

const meta: Meta<typeof <%= name %>> = {
  title: 'Base/<%= name %>',
  component: <%= name %>,
  render: () => ({
    components: { <%= name %> },
    template: '<<%= name %> >Hello World</<%= name %>>',
  }),
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof <%= name %>>;

export const Default: Story = {};