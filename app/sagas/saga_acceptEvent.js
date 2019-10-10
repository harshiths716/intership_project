import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import {SEND_ASSIGNEDEVENTS,acceptEvents_api_hit,ACCEPT_EVENT}  from '../Actions/eventsAssigned'
import { acceptAssigned_api} from "../Actions/api";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData(actions) {
  console.warn('inside getapidata',actions)
  try {
   console.warn('i am inside saga')

    // do api call
    const data = yield call(acceptAssigned_api,actions.payload);
    console.warn("data in saga assigned"+JSON.stringify(data))
    yield put(acceptEvents_api_hit(data));
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
console.warn('i am inside saga')

export default function* mySagaAssignedEventsaccept() {
    console.warn('saga_assigned')
 yield takeEvery(ACCEPT_EVENT, getApiData);
}
