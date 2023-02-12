import type { Meta, StoryObj } from '@storybook/vue3';
import VHomeView from '@/views/VHomeView.vue';

const meta: Meta<typeof VHomeView> = {
  title: 'Views/VHomeView',
  component: VHomeView,
  render: () => ({
    components: { VHomeView },
    template: '<VHomeView />',
  }),
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof VHomeView>;

export const Default: Story = {};
