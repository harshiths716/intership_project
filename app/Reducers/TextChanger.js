import * as Actions from '../Actions/Login_ActionTypes';
import {TYPE_USERNAME,TYPE_PASSWORD,SIGN_IN,RECEIVE_LOGIN_API}  from '../Actions/Login_ActionTypes'
import {SEND_UPCOMING,RECEIVE_UPCOMING}  from '../Actions/upcoming'
const TextChanger = (state = {username: '', password: '', status:'',userdata: '',upcoming:''},action) => {
  switch (action.type) {
    case Actions.TYPE_USERNAME:
      // console.warn(state);
      return {
        ...state,
        username: action.payload,
      };
    case Actions.TYPE_PASSWORD:
     // console.warn(action.payload);
      return {
        ...state,
        password: action.payload,
      };
    // case Actions.SIGN_IN:
    //     console.warn(action.payload);
    //   return {
    //     ...state,
    //     status: 'sddk',
    //   };
    case Actions.SET_ARTICLE_DETAILS:
   //   console.warn(state);
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
       // console.warn('i am inside REV',JSON.stringify(action.payload))
          return {
            ...state,
            userdata: action.payload,
          };

    default:
      return state;
  }
};
export default TextChanger;
