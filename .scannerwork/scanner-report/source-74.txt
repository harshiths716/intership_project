import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import {SEND_INVITES,send_invite_done}  from '../Actions/invite_action'
import {send_invites_api_hit} from "../Actions/api";


function* send_invites_api_saga(actions) {
    try {
      const data = yield call(send_invites_api_hit,actions.payload);
      console.log(this.state.data)
      yield put(send_invite_done(data));
    } catch (e) {
    
    }
  }


export default function* mySagaInvites() {
 yield takeEvery(SEND_INVITES,send_invites_api_saga)


}
