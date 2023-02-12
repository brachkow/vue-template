<script lang="ts" setup>
  import { withDefaults } from 'vue';

  interface Props {
    tag?: string;
  }

  withDefaults(defineProps<Props>(), {
    tag: 'div',
  });
</script>

<template>
  <component :is="tag" class="block rounded border p-4 bg-white">
    <slot />
  </component>
</template>
