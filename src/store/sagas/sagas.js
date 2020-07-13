import { all } from 'redux-saga/effects';
// import { saga1 } from './Feature1Sagas';

export default function* watchSagas() {
  // Combine sagas with
  yield all([]);
  // OR
  // yield all([fork(saga1)]);
}
