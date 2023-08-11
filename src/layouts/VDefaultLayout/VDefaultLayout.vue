<script lang="ts">
  export interface VDefaultLayoutProps {
    title?: string;
  }
</script>

<script lang="ts" setup>
  import { useTitle } from '@vueuse/core';

  const props = withDefaults(defineProps<VDefaultLayoutProps>(), {
    title: 'App',
  });

  useTitle(props.title);
</script>

<template>
  <div class="container">
    <slot />
  </div>
</template>
