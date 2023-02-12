import type { Meta, StoryObj } from '@storybook/vue3';
import VCard from '@/components/VCard.vue';

const meta: Meta<typeof VCard> = {
  title: 'Base/VCard',
  component: VCard,
  render: () => ({
    components: { VCard },
    template: '<VCard >Hello World</VCard>',
  }),
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof VCard>;

export const Default: Story = {};
