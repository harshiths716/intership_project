import {call, put, takeEvery} from 'redux-saga/effects';

import {SIGN_IN} from '../Actions/Login_ActionTypes';
import {Login_api, Upcoming_api} from '../Actions/api';
import {login_api_hit} from '../Actions/login-actions';
import {SEND_UPCOMING, upcoming_api_hit} from '../Actions/upcoming_action';

function* getLoginApiData(actions) {
  try {
    const data = yield call(Login_api, actions.payload);
    yield put(login_api_hit(data));
  } catch (e) {}
}

function* getUpcomingApiData(actions) {
  try {
    const data = yield call(Upcoming_api, actions.payload);
    yield put(upcoming_api_hit(data));
  } catch (e) {}
}
export default function* mySagaLogin() {
  yield takeEvery(SIGN_IN, getLoginApiData);
  yield takeEvery(SEND_UPCOMING, getUpcomingApiData);
}
