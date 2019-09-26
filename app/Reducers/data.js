import { RECEIVE_API_DATA } from "../Actions/mock_actions";
import {TYPE_USERNAME,TYPE_PASSWORD,SIGN_IN,RECEIVE_LOGIN_API}  from '../Actions/Login_ActionTypes'

console.warn('i am inside data ')

export default (state = {}, action) => {
  console.log(action.type+" this is the action type dispatched ");
  switch (action.type) {
    
    case RECEIVE_API_DATA:
        console.warn('i am inside RECEIVE_API_DATA ')

      return action.data;
      case RECEIVE_LOGIN_API:
        return action.data
    default:
      return state;
  }
};