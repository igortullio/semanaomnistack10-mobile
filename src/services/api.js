import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.20.0.160:3333'
});

export default api;