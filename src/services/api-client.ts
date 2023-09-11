import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '075dec536dbd462f92b7a9d05c5d8bb8',
  },
});
