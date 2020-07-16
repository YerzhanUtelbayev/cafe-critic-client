import {
  CREATE_PLACE_REQUEST,
  CREATE_PLACE_SUCCESS,
  CREATE_PLACE_FAILURE,
} from './actionTypes';

export const createPlaceRequest = (placeData) => ({
  type: CREATE_PLACE_REQUEST,
  payload: placeData,
});
export const createPlaceSuccess = () => ({ type: CREATE_PLACE_SUCCESS });
export const createPlaceFailure = (error) => ({
  type: CREATE_PLACE_FAILURE,
  payload: error,
});
