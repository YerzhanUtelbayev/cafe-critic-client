import { takeLatest, put, call } from 'redux-saga/effects';

import {
  handlePlaceCreation,
  handleFetchPlaces,
} from '../../network/apis/placesRequests';
import {
  createPlaceSuccess,
  createPlaceFailure,
  fetchPlacesSuccess,
  fetchPlacesFailure,
} from '../actions/places';
import {
  CREATE_PLACE_REQUEST,
  FETCH_PLACES_REQUEST,
} from '../actions/actionTypes';

function* sendPlaceCreationData({ payload }) {
  try {
    yield call(handlePlaceCreation, payload);
    yield put(createPlaceSuccess());
  } catch (error) {
    yield put(createPlaceFailure(error));
  }
}

function* fetchPlacesData() {
  try {
    const placesList = yield call(handleFetchPlaces);
    yield put(fetchPlacesSuccess(placesList));
  } catch (error) {
    yield put(fetchPlacesFailure(error));
  }
}

export function* watchPlaceCreation() {
  yield takeLatest(CREATE_PLACE_REQUEST, sendPlaceCreationData);
}

export function* watchPlacesRequest() {
  yield takeLatest(FETCH_PLACES_REQUEST, fetchPlacesData);
}
