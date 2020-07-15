import { takeLatest, put } from 'redux-saga/effects';

import { registerUserRequest } from '../../network/apis/usersRequests';
import { registerUserSuccess } from '../actions/users';
import { REGISTER_USER_REQUEST } from '../actions/actionTypes';

function* sendUserRegistrationData(action) {
  try {
    yield registerUserRequest(action.payload);
    yield put(registerUserSuccess());
  } catch (error) {
    console.log(error);
  }
}

export default function* watchUserRequests() {
  yield takeLatest(REGISTER_USER_REQUEST, sendUserRegistrationData);
}
