import { defineStore } from 'pinia';

export const useLoadingStore = defineStore('loading', {
  state: (): { isLoading: boolean } => ({
    isLoading: false,
  }),
  actions: {
    setLoading(isLoading: boolean = false) {
      this.isLoading = isLoading;
    },
  },
});
