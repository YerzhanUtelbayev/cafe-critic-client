import {
  CREATE_PLACE_REQUEST,
  CREATE_PLACE_SUCCESS,
  CREATE_PLACE_FAILURE,
  FETCH_PLACES_REQUEST,
  FETCH_PLACES_SUCCESS,
  FETCH_PLACES_FAILURE,
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

export const fetchPlacesRequest = () => ({ type: FETCH_PLACES_REQUEST });
export const fetchPlacesSuccess = (placesList) => ({
  type: FETCH_PLACES_SUCCESS,
  payload: placesList,
});
export const fetchPlacesFailure = (error) => ({
  type: FETCH_PLACES_FAILURE,
  payload: error,
});
