import { all } from 'redux-saga/effects';
// import { saga1 } from './Feature1Sagas';
import { watchUserRegistration, watchUserLogin } from './userSaga';

export default function* watchSagas() {
  // Combine sagas with
  yield all([watchUserRegistration, watchUserLogin]);
  // OR
  // yield all([fork(saga1)]);
}
