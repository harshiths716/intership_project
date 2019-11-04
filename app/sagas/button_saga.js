import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import {UPLOAD,PUBLISH,CANCEL,INVITE,JOIN,WITHDRAW}  from '../Actions/button_action'
import {sendUserDetails_api,createEvent_Api} from "../Actions/api";

function* createEventApiData(actions) {
  console.warn('inside sendUserDetailsApiDat',actions)
  try {
   console.warn('i am inside saga')

    const data = yield call(createEvent_Api,actions.payload);
    console.warn("data in saga sendUserDetails_api"+JSON.stringify(data))
    yield put(create_event_done(data));
  } catch (e) {
    console.warn(e);
  }
}


function* sendUserDetailsApiData(actions) {
  console.warn('inside sendUserDetailsApiDat',actions)
  try {
   console.warn('i am inside saga')

    const data = yield call(sendUserDetails_api,actions.payload);
    console.warn("data in saga sendUserDetails_api"+JSON.stringify(data))
    yield put(receiveUserDetails(data));
  } catch (e) {
    console.warn(e);
  }
}


console.warn('i am inside saga')

export default function* mySagaCreateEvent() {
    console.warn('saga_sendUserDetailsApiDat')
 yield takeEvery(CREATE_EVENT_API,createEventApiData);
 yield takeEvery(SEND_USER_DETAILS,sendUserDetailsApiData);
}
