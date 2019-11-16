import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import {CREATE_EVENT_API,SEND_USER_DETAILS,receiveUserDetails,create_event_done}  from '../Actions/create_event_action'
import {sendUserDetails_api,createEvent_Api} from "../Actions/api";

function* createEventApiData(actions) {

  try {
   
    const data = yield call(createEvent_Api,actions.payload);
    yield put(create_event_done(data));
  } catch (e) {
  }
}


function* sendUserDetailsApiData(actions) {

  try {

    const data = yield call(sendUserDetails_api,actions.payload);

    yield put(receiveUserDetails(data));
  } catch (e) {

  }
}




export default function* mySagaCreateEvent() {
 
 yield takeEvery(CREATE_EVENT_API,createEventApiData);
 yield takeEvery(SEND_USER_DETAILS,sendUserDetailsApiData);
}
