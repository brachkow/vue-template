import type { Meta, StoryObj } from '@storybook/vue3';
import VLoading from '@/components/VLoading.vue';

const meta: Meta<typeof VLoading> = {
  title: 'Base/VLoading',
  component: VLoading,
  render: () => ({
    components: { VLoading },
    template: '<VLoading >Hello World</VLoading>',
  }),
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof VLoading>;

export const Default: Story = {};
