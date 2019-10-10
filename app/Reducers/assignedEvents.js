import * as Actions from '../Actions/Login_ActionTypes';
import {TYPE_USERNAME,TYPE_PASSWORD,SIGN_IN,RECEIVE_LOGIN_API}  from '../Actions/Login_ActionTypes'
import {SEND_UPCOMING,RECEIVE_UPCOMING}  from '../Actions/upcoming'
import {ACCEPT_EVENT_API} from '../Actions/eventsAssigned'
const AssignedEvents = (state = {acceptapi:''},action) => {
  switch (action.type) {
    case ACCEPT_EVENT_API:
        return{
            ...state,
            acceptapi:action.payload
        }

    default:
      return state;
  }
};
export default AssignedEvents;
