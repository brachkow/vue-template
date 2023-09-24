import App from './App.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import router from './router';
import { createI18n } from 'vue-i18n';
import PrimeVue from 'primevue/config';
import Tailwind from 'primevue/passthrough/tailwind';
import ToastService from 'primevue/toastservice';
import '@/style.css';
// import pt from '@/pt'; Use this if you want to go completely unstyled

const i18n = createI18n({
  legacy: false,
});

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(i18n);
app.use(pinia);
app.use(router);
app.use(PrimeVue, { unstyled: true, pt: Tailwind }); // Remove pt (and primvue from tailwind's content) if you want to go completely unstyled
app.use(ToastService);

app.mount('#app');
