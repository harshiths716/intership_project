import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import {TYPE_USERNAME,TYPE_PASSWORD,SIGN_IN}  from '../Actions/Login_ActionTypes'
import { Login_api} from "../Actions/api";
import {login_api_hit} from '../Actions/login-actions'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getLoginApiData(actions) {
  // console.warn('inside getapidata',actions)
  try {
  //  console.warn('i am inside saga')

    // do api call
    const data = yield call(Login_api,actions.payload);
    // console.warn("data in saga"+JSON.stringify(data))
    yield put(login_api_hit(data));
  } catch (e) {
    console.warn(e);
  }
}


import {SEND_UPCOMING,RECEIVE_UPCOMING}  from '../Actions/upcoming'
import { Upcoming_api} from "../Actions/api";
import {upcoming_api_hit} from '../Actions/upcoming'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getUpcomingApiData(actions) {
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

export default function* mySagaLogin() {
 yield takeEvery(SIGN_IN, getLoginApiData);
 yield takeEvery(SEND_UPCOMING, getUpcomingApiData);

}
