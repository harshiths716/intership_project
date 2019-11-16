import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import {UPLOAD,PUBLISH,CANCEL,INVITE,JOIN,WITHDRAW,join_done}  from '../Actions/button_action'
import {button_api_hit} from "../Actions/api";

function* joinApiData(actions) {
 // console.warn('inside sendUserDetailsApiDat',actions)
  try {
 //  console.warn('i am inside saga')

    const data = yield call(button_api_hit,actions.payload);
    //console.warn("data in saga sendUserDetails_api"+JSON.stringify(data))
    yield put(join_done(data));
  } catch (e) {
    console.warn(e);
  }
}

export default function* mySagaButton() {
 yield takeEvery(JOIN,joinApiData);
 yield takeEvery(PUBLISH,joinApiData);
 yield takeEvery(WITHDRAW,joinApiData);
 yield takeEvery(UPLOAD,joinApiData);
// yield takeEvery(INVITE,joinApiData);
 yield takeEvery(CANCEL,joinApiData);
}
