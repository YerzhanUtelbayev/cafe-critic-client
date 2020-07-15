const {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
} = require('./actionTypes');

export const registerUserRequest = (userData) => ({
  type: REGISTER_USER_REQUEST,
  payload: userData,
});
export const registerUserSuccess = () => ({ type: REGISTER_USER_SUCCESS });
export const registerUserFailure = (error) => ({
  type: REGISTER_USER_FAILURE,
  payload: error,
});

export const loginUserRequest = (userData) => ({
  type: LOGIN_USER_REQUEST,
  payload: userData,
});
export const loginUserSuccess = () => ({ type: LOGIN_USER_SUCCESS });
export const loginUserFailure = (error) => ({
  type: LOGIN_USER_FAILURE,
  payload: error,
});
