import axios from 'axios';

const api = axios.create({
  baseURL: 'http://9e8b8e53.ngrok.io',
});

export default api;