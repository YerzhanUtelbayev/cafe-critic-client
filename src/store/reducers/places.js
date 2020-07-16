import {
  CREATE_PLACE_SUCCESS,
  CREATE_PLACE_FAILURE,
  FETCH_PLACES_SUCCESS,
  FETCH_PLACES_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  places: [],
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PLACES_SUCCESS:
      return { ...state, places: [...payload], error: null };
    case CREATE_PLACE_SUCCESS:
      return { ...state, error: null };
    case CREATE_PLACE_FAILURE:
    case FETCH_PLACES_FAILURE:
      return { ...state, error: payload };
    default:
      return state;
  }
};
