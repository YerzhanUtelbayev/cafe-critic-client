import axios from 'axios';
import BASE_URL from '../../utilities/constants';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstance;
