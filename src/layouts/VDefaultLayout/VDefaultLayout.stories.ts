import type { Meta, StoryObj } from '@storybook/vue3';
import { VDefaultLayout } from '.';

const meta = {
  title: 'Layout/VDefaultLayout',
  component: VDefaultLayout,
  render: (args: any) => ({
    components: { VDefaultLayout },
    setup() {
      return { args };
    },
    template: '<VDefaultLayout v-bind="args" />',
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof VDefaultLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
