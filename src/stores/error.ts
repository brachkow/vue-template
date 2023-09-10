import { defineStore } from 'pinia';

export const useErrorStore = defineStore('error', {
  state: (): { error: any } => ({
    error: undefined,
  }),
  actions: {
    setError(error: any) {
      this.error = error;
    },
    clearError() {
      this.error = undefined;
    },
  },
});
