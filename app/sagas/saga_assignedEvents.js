import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import {SEND_ASSIGNEDEVENTS,assignedEvents_api_hit}  from '../Actions/eventsAssigned'
import { assignedEvents_api} from "../Actions/api";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getassignedApiData(actions) {
  
  try {
  
    const data = yield call(assignedEvents_api,actions.payload);
  
    yield put(assignedEvents_api_hit(data));
  } catch (e) {

  }
}


import {acceptEvents_done,ACCEPT_EVENT,REJECT_EVENT,rejectEvents_done}  from '../Actions/eventsAssigned'
import {acceptEvents_API,rejectEvents_API} from "../Actions/api";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getacceptApiData(actions) {
 
  try {

    const data = yield call(acceptEvents_API,actions.payload);
    
    yield put(acceptEvents_done(data));
  } catch (e) {

  }
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getrejectApiData(actions) {
 
  try {

    const data = yield call(rejectEvents_API,actions.payload);
  
    yield put(rejectEvents_done(data));
  } catch (e) {
 
  }
}
/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/

export default function* mySagaAssignedEvents() {
    
 yield takeEvery(SEND_ASSIGNEDEVENTS, getassignedApiData);
 yield takeEvery(ACCEPT_EVENT, getacceptApiData);
 yield takeEvery(REJECT_EVENT, getrejectApiData);


}
