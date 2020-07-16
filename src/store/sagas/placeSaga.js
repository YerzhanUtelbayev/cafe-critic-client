import { takeLatest, put } from 'redux-saga/effects';

import { handlePlaceCreation } from '../../network/apis/placesRequests';
import { createPlaceSuccess, createPlaceFailure } from '../actions/places';
import { CREATE_PLACE_REQUEST } from '../actions/actionTypes';

function* sendPlaceCreationData({ payload }) {
  try {
    yield handlePlaceCreation(payload);
    yield put(createPlaceSuccess());
  } catch (error) {
    yield put(createPlaceFailure(error));
  }
}

export default function* watchPlaceCreation() {
  yield takeLatest(CREATE_PLACE_REQUEST, sendPlaceCreationData);
}
