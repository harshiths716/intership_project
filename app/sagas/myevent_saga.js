import { call, put, takeEvery} from "redux-saga/effects";

import {PARTICIPATED_EVENT,ORGANIZED_EVENT,organized_events_done}  from '../Actions/myevents_actions'
import {myeventsparticipated_API,myeventsOrganized_API} from "../Actions/api";

function* getorganizedApiData(actions) {
  try {
    const data = yield call(myeventsOrganized_API,actions.payload);
    yield put(organized_events_done(data));
  } catch (e) {
    console.warn(e);
  }
}

function* getparticipatedApiData(actions) {
  try {

    const data = yield call(myeventsparticipated_API,actions.payload);
    yield put(participated_events_done(data));
  } catch (e) {
    console.warn(e);
  }
}
export default function* mySagaMyeventsEvents() {

 yield takeEvery(PARTICIPATED_EVENT, getparticipatedApiData);
 yield takeEvery(ORGANIZED_EVENT, getorganizedApiData);


}
