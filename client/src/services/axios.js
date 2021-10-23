import axios from 'axios';
import { apiPath } from './api-constants';

const {BASE_URL } = apiPath;

export const BaseAxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
});


BaseAxiosInstance.interceptors.request.use((config) => {
  config.params = config.params || {};
  return config;
});