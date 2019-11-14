import {RECEIVE_LOGIN_API,SIGN_IN,} from '../Actions/Login_ActionTypes'

export const login_api_hit = val => ({ type: RECEIVE_LOGIN_API ,payload:val});



export function sign(userdata) {
    return {type: SIGN_IN, payload: userdata};
  }