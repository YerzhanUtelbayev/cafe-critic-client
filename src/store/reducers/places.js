import {
  CREATE_PLACE_SUCCESS,
  CREATE_PLACE_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  places: [],
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_PLACE_SUCCESS:
      return { ...state, error: null };
    case CREATE_PLACE_FAILURE:
      return { ...state, error: payload };
    default:
      return state;
  }
};
