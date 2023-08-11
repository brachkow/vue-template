import { createRouter, createWebHistory } from 'vue-router';
import { VLoadingView } from '@/views/VLoadingView';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: VLoadingView,
    },
  ],
});

export default router;
