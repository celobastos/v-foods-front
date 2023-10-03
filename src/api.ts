import axios from 'axios';

axios.defaults.withCredentials = false;

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

// interceptor para todas as requisições
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token'); // Obtenha o token do armazenamento local
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Adicione o token ao cabeçalho Authorization
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default api;
