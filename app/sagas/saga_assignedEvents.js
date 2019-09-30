import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import {SEND_ASSIGNEDEVENTS,assignedEvents_api_hit}  from '../Actions/eventsAssigned'
import { assignedEvents_api} from "../Actions/api";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData(actions) {
  console.warn('inside getapidata',actions)
  try {
   console.warn('i am inside saga')

    // do api call
    const data = yield call(assignedEvents_api,actions.payload);
    console.warn("data in saga assigned"+JSON.stringify(data))
    yield put(assignedEvents_api_hit(data));
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

export default function* mySagaAssignedEvents() {
    console.warn('saga_assigned')
 yield takeEvery(SEND_ASSIGNEDEVENTS, getApiData);
}
