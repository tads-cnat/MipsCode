import axios from 'axios';

const api = axios.create({
  headers: {"Content-Type": "application/x-www-form-urlencoded"},
  baseURL: '',
});

export default api;

