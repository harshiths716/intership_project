import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import {GET_DESIGNATION}  from '../Actions/invite_action'
import {} from "../Actions/api";


function* get_designation_Api_Data(actions) {
    try {
      const data = yield call(add_subtask_api_hit,actions.payload);
      yield put(add_subtask_api_done(data));
    } catch (e) {
    
    }
  }


export default function* mySagaTask() {
 yield takeEvery(GET_DESIGNATION, get_accepted_task_events_Api_Data);


}
