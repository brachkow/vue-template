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
      'bg-blue-600 text-white hover:bg-blue-700': type === 'positive',
      'bg-red-600  text-white  hover:bg-red-700': type === 'negative',
      'border bg-white text-black hover:bg-gray-100': !type,
    }">
    <slot />
  </component>
</template>
