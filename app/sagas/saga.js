import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { REQUEST_API_DATA, receiveApiData } from "../Actions/mock_actions";
import { fetchData } from "../Actions/api";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData(actions) {
    console.warn('i am inside saga')
  try {
    console.warn('i am inside saga')

    // do api call
    const data = yield call(fetchData);
    yield put(receiveApiData(data));
  } catch (e) {
    console.warn(e);
  }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
//console.warn('i am inside saga')

export default function* mySaga() {
  yield takeEvery(REQUEST_API_DATA, getApiData);
}
