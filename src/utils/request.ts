import axios from 'axios';
import { useErrorStore } from '@/stores/error';
import { useAuthStore } from '@/stores/auth';
import router from '@/router';

const request = axios.create();

request.interceptors.request.use(
  (config) => {
    const authStore = useAuthStore();

    // Use auth token if available
    if (authStore.token) {
      config.headers.Authorization = `Bearer ${authStore.token}`;
    }

    return config;
  },
  (error) => {
    // Pass errors to toast
    const errorStore = useErrorStore();
    errorStore.setError(error);

    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Logout on 401 (token expiration)
    if (error.response?.status === 401) {
      router.push('/login');
    }

    // Pass errors to toast
    const errorStore = useErrorStore();
    errorStore.setError(error);

    return Promise.reject(error);
  },
);

export default request;
