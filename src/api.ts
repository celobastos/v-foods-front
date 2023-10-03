import axios from 'axios';

axios.defaults.withCredentials = false;

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

// interceptor para todas as requisições
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token'); 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Adiciona o token jwt no cabeçalho de autorização
  }
  return config;
});

export default api;
