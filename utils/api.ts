// utils/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5100/api',
//   baseURL: 'https://testing.topplaced.com/api',
  headers: {
    'Accept': 'application/json',
  },
  withCredentials: true, // set true if cookies are needed
});

export default api;
