import { all } from 'redux-saga/effects';
// import { saga1 } from './Feature1Sagas';
import { watchUserRegistration, watchUserLogin } from './userSaga';
import { watchPlaceCreation, watchPlacesRequest, watchPlaceRequest } from './placeSaga';

export default function* watchSagas() {
  // Combine sagas with
  yield all([
    watchUserRegistration(),
    watchUserLogin(),
    watchPlaceCreation(),
    watchPlacesRequest(),
    watchPlaceRequest(),
  ]);
  // OR
  // yield all([fork(saga1)]);
}
