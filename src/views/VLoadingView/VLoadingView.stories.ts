import type { Meta, StoryObj } from '@storybook/vue3';
import { VLoadingView } from '.';

const meta = {
  title: 'View/VLoadingView',
  component: VLoadingView,
  render: (args: any) => ({
    components: { VLoadingView },
    setup() {
      return { args };
    },
    template: '<VLoadingView v-bind="args" />',
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof VLoadingView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
