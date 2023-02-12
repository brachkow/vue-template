import type { Meta, StoryObj } from '@storybook/vue3';
import VButton from '@/components/VButton.vue';

const meta: Meta<typeof VButton> = {
  title: 'Base/VButton',
  component: VButton,
  render: () => ({
    components: { VButton },
    template: '<VButton>Click me</VButton>',
  }),
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof VButton>;

export const Default: Story = {};

export const Positive: Story = {
  args: {
    type: 'positive',
  },
};

export const Negative: Story = {
  args: {
    type: 'negative',
  },
};
