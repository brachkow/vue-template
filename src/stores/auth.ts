import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: (): { token: string | undefined } => ({
    token: undefined,
  }),
  actions: {
    resetToken() {
      this.token = undefined;
    },
  },
  persist: true,
});
