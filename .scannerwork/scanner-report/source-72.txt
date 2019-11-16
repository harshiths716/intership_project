import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { REQUEST_API_DATA, receiveApiData } from "../Actions/mock_actions";
import { fetchData } from "../Actions/api";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData(actions) {
 
  try {
    
    // do api call
    const data = yield call(fetchData);
    yield put(receiveApiData(data));
  } catch (e) {
   
  }
}


export default function* mySaga() {
  yield takeEvery(REQUEST_API_DATA, getApiData);
}
