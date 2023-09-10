<script lang="ts" setup>
  import { useLoadingStore } from '@/stores/loading';
  import { VLoadingView } from './views/VLoadingView';

  const loadingStore = useLoadingStore();
</script>

<template>
  <VLoadingView v-if="loadingStore.isLoading" />
  <RouterView v-else />
</template>
