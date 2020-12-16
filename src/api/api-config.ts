import axios from 'axios';
import { AuthUtils, LocalStorageUtils } from 'utils';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axiosInstance.interceptors.request.use((request) => {
  const authToken = LocalStorageUtils.getItem('auth-token');
  request.headers.Authorization = `Bearer ${authToken}`;
  return request;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.status === 401) {
      AuthUtils.logout();
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
