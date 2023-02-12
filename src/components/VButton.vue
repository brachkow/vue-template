<script lang="ts" setup>
  import { withDefaults } from 'vue';

  export interface Props {
    tag?: 'a' | 'RouterLink' | 'button';
    type?: 'positive' | 'negative' | undefined;
  }

  withDefaults(defineProps<Props>(), {
    tag: 'button',
    type: undefined,
  });
</script>

<template>
  <component
    :is="tag"
    class="inline-block rounded-xl px-4 py-1 transition-colors"
    :class="{
      'bg-blue-600 hover:bg-blue-700 text-white': type === 'positive',
      'bg-red-600  hover:bg-red-700  text-white': type === 'negative',
      'bg-white hover:bg-gray-100 border text-black': !type,
    }">
    <slot />
  </component>
</template>
