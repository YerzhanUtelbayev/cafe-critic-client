import axiosInstance from './axios-api';

const registerUser = async (userData) => {
  const response = await axiosInstance.post('/auth/register', userData);
  const { data } = response;
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

const loginUser = async (userData) => {
  const response = await axiosInstance.post('/auth/login', userData);
  const { data } = response;
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

const logoutUser = async () => {
  const response = await axiosInstance.post('/auth/logout');
  const { data } = response;
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export default { registerUser, loginUser, logoutUser };
