import axiosInstance from './axios-api';

export const handlePlaceCreation = async (placeData) => {
  const response = await axiosInstance.post('/places', placeData);
  const { data } = response;
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return response;
};

export const handleFetchPlaces = async (params) => {
  const response = await axiosInstance.get('/places', { params });
  const { data } = response;
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export const handleFetchPlaceById = async (placeId) => {
  const response = await axiosInstance.get(`/places/${placeId}`);
  const { data } = response;
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
};
