import { takeLatest, put } from 'redux-saga/effects';

import {
  handleUserRegistration,
  handleUserLogin,
} from '../../network/apis/usersRequests';
import {
  registerUserSuccess,
  loginUserSuccess,
  registerUserFailure,
  loginUserFailure,
} from '../actions/users';
import {
  REGISTER_USER_REQUEST,
  LOGIN_USER_REQUEST,
} from '../actions/actionTypes';

function* sendUserRegistrationData(action) {
  try {
    yield handleUserRegistration(action.payload);
    yield put(registerUserSuccess());
  } catch (error) {
    yield put(registerUserFailure(error));
  }
}

function* sendUserLoginData(action) {
  try {
    yield handleUserLogin(action.payload);
    yield put(loginUserSuccess());
  } catch (error) {
    yield put(loginUserFailure(error));
  }
}

export function* watchUserRegistration() {
  yield takeLatest(REGISTER_USER_REQUEST, sendUserRegistrationData);
}

export function* watchUserLogin() {
  yield takeLatest(LOGIN_USER_REQUEST, sendUserLoginData);
}
