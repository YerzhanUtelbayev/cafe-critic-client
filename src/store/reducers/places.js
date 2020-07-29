import {
  CREATE_PLACE_SUCCESS,
  CREATE_PLACE_FAILURE,
  FETCH_PLACES_SUCCESS,
  FETCH_PLACES_FAILURE,
  FETCH_PLACE_INFO_FAILURE,
  FETCH_PLACE_INFO_SUCCESS,
  PLACE_INFO_INIT,
} from '../actions/actionTypes';

const initialState = {
  places: [],
  pagination: {},
  currentPlace: {},
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PLACES_SUCCESS: {
      const { docs, ...rest } = payload;
      return {
        ...state,
        places: [...docs],
        pagination: { ...rest },
        error: null,
      };
    }

    case FETCH_PLACE_INFO_SUCCESS:
      return { ...state, currentPlace: { ...payload }, error: null };
    case PLACE_INFO_INIT:
      return { ...state, currentPlace: {}, error: null };

    case CREATE_PLACE_SUCCESS:
      return { ...state, error: null };

    case CREATE_PLACE_FAILURE:
    case FETCH_PLACES_FAILURE:
    case FETCH_PLACE_INFO_FAILURE:
      return { ...state, error: payload };
    default:
      return state;
  }
};
