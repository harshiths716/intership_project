import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import {SEND_UPCOMING,RECEIVE_UPCOMING}  from '../Actions/upcoming'
import { Upcoming_api} from "../Actions/api";
import {upcoming_api_hit} from '../Actions/upcoming'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData(actions) {
  console.warn('inside getapidata',actions)
  try {
   console.warn('i am inside saga')

    // do api call
    const data = yield call(Upcoming_api,actions.payload);
    console.warn("data in saga"+JSON.stringify(data))
    yield put(upcoming_api_hit(data));
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

export default function* mySagaUpcoming() {
    console.warn('saga_upcomming')
 yield takeEvery(SEND_UPCOMING, getApiData);
}
