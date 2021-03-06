import axiosInstance from './axios-api';

export const handleUserRegistration = async (userData) => {
  const response = await axiosInstance.post('/auth/register', userData);
  const { data } = response;
  if (response.status >= 400 && data) {
    throw new Error(data.errors);
  }
  return response;
};

export const handleUserLogin = async (userData) => {
  const response = await axiosInstance.post('/auth/login', userData);
  const { data } = response;
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export const handleUserLogout = async () => {
  const response = await axiosInstance.post('/auth/logout');
  const { data } = response;
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};
