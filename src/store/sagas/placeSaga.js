import { takeLatest, put, call } from 'redux-saga/effects';

import {
  handlePlaceCreation,
  handleFetchPlaces,
  handleFetchPlaceById,
} from '../../network/apis/placesRequests';
import {
  createPlaceSuccess,
  createPlaceFailure,
  fetchPlacesSuccess,
  fetchPlacesFailure,
  fetchPlaceByIdSuccess,
  fetchPlaceByIdFailure,
} from '../actions/places';
import {
  CREATE_PLACE_REQUEST,
  FETCH_PLACES_REQUEST,
  FETCH_PLACE_INFO_REQUEST,
} from '../actions/actionTypes';

function* sendPlaceCreationData({ payload }) {
  try {
    yield call(handlePlaceCreation, payload);
    yield put(createPlaceSuccess());
  } catch (error) {
    yield put(createPlaceFailure(error));
  }
}

function* fetchPlacesData({ payload }) {
  try {
    const placesList = yield call(handleFetchPlaces, payload);
    yield put(fetchPlacesSuccess(placesList));
  } catch (error) {
    yield put(fetchPlacesFailure(error));
  }
}

function* fetchPlaceFullData({ payload }) {
  try {
    const placeData = yield call(handleFetchPlaceById, payload);
    yield put(fetchPlaceByIdSuccess(placeData));
  } catch (error) {
    yield put(fetchPlaceByIdFailure(error));
  }
}

export function* watchPlaceCreation() {
  yield takeLatest(CREATE_PLACE_REQUEST, sendPlaceCreationData);
}

export function* watchPlacesRequest() {
  yield takeLatest(FETCH_PLACES_REQUEST, fetchPlacesData);
}

export function* watchPlaceRequest() {
  yield takeLatest(FETCH_PLACE_INFO_REQUEST, fetchPlaceFullData);
}
