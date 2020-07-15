import { all, fork } from 'redux-saga/effects';
// import { saga1 } from './Feature1Sagas';
import watchUserRequest from './userSaga';

export default function* watchSagas() {
  // Combine sagas with
  yield all([fork(watchUserRequest)]);
  // OR
  // yield all([fork(saga1)]);
}
