import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import {SEND_ACCEPTED_TASK_EVENTS,receive_accepted_task_events}  from '../Actions/Task_actions'
import {accepted_task_events_Api} from "../Actions/api";

function* get_accepted_task_events_Api_Data(actions) {
  try {
    const data = yield call(accepted_task_events_Api,actions.payload);
    yield put(receive_accepted_task_events(data));
  } catch (e) {
    console.warn(e);
  }
}






export default function* mySagaTask() {
 yield takeEvery(SEND_ACCEPTED_TASK_EVENTS, get_accepted_task_events_Api_Data);

}
