import { createApp } from 'vue';
import { createPinia } from 'pinia';

import '@/style.css';

import App from './App.vue';
import router from './router';

import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  legacy: false,
});

const app = createApp(App);

app.use(i18n);
app.use(createPinia());
app.use(router);

app.mount('#app');
