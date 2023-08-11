---
to: src/<%= folder %>/<%= name %>/<%= name %>.stories.ts
---
import type { Meta, StoryObj } from '@storybook/vue3';
import { <%= name %> } from '.';

const meta = {
  title: '<%= name %>',
  component: <%= name %>,
  render: (args: any) => ({
    components: { <%= name %> },
    setup() {
      return { args };
    },
    template: '<<%= name %> v-bind="args" />',
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof <%= name %>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
