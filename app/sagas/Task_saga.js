import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import {SEND_ACCEPTED_TASK_EVENTS,receive_accepted_task_events,ADD_TASK_API,add_task_api_done, GET_TASK_API
,get_task_api_done,ADD_SUBTASK_API,add_subtask_api_done}  from '../Actions/Task_actions'
import {accepted_task_events_Api,add_task_api_hit,get_task_api_hit,add_subtask_api_hit} from "../Actions/api";

function* get_accepted_task_events_Api_Data(actions) {
  try {
    const data = yield call(accepted_task_events_Api,actions.payload);
    yield put(receive_accepted_task_events(data));
  } catch (e) {

  }
}

function* get_added_task_Api_Data(actions) {
    try {
      const data = yield call(add_task_api_hit,actions.payload);
      yield put(add_task_api_done(data));
    } catch (e) {
  
    }
  }
  
  function* get_task_details_Api_Data(actions) {
    try {
      const data = yield call(get_task_api_hit,actions.payload);
      yield put(get_task_api_done(data));
    } catch (e) {
    
    }
  }
  
  function* get_added_subtask_Api_Data(actions) {
    try {
      const data = yield call(add_subtask_api_hit,actions.payload);
      yield put(add_subtask_api_done(data));
    } catch (e) {

    }
  }


export default function* mySagaTask() {
 yield takeEvery(SEND_ACCEPTED_TASK_EVENTS, get_accepted_task_events_Api_Data);
 yield takeEvery(ADD_TASK_API , get_added_task_Api_Data);

 yield takeEvery(ADD_SUBTASK_API , get_added_subtask_Api_Data);
 yield takeEvery(GET_TASK_API , get_task_details_Api_Data);

}
