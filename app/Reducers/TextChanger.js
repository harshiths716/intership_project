import * as Actions from '../Actions/Login_ActionTypes';
import {TYPE_USERNAME,TYPE_PASSWORD,SIGN_IN,RECEIVE_LOGIN_API}  from '../Actions/Login_ActionTypes'
import {SEND_UPCOMING,RECEIVE_UPCOMING}  from '../Actions/upcoming'
import {RECEIVE_ASSIGNEDEVENTS} from '../Actions/eventsAssigned'
const TextChanger = (state = {username: '', password: '', status:'',userdata: '',upcoming:'',assignedEvents:''},action) => {
  switch (action.type) {
    case Actions.TYPE_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    case Actions.TYPE_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
   case RECEIVE_ASSIGNEDEVENTS:
      return {
        ...state,
        assignedEvents: action.payload,
      };
    case Actions.SET_ARTICLE_DETAILS:
      return {
        ...state,
        status: action.payload,
      };
      case RECEIVE_UPCOMING:
      return{
        ...state,
        upcoming:action.payload
      };
    case RECEIVE_LOGIN_API:
    
          return {
            ...state,
            userdata: action.payload,
          };

    default:
      return state;
  }
};
export default TextChanger;
