import App from './App.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import { createI18n } from 'vue-i18n';
import PrimeVue from 'primevue/config';
import Tailwind from 'primevue/passthrough/tailwind';
import ToastService from 'primevue/toastservice';
import '@/style.css';

const i18n = createI18n({
  legacy: false,
});

const app = createApp(App);

app.use(i18n);
app.use(createPinia());
app.use(router);
app.use(PrimeVue, { unstyled: true, pt: Tailwind }); // Remove pt (and primvue from tailwind's content) if you want to go completely unstyled
app.use(ToastService);

app.mount('#app');
