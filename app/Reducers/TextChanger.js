import * as Actions from '../Actions/ActionTypes';

const TextChanger = (state = {username: '', password: '',status:'no update'}, action) => {
  switch (action.type) {
    case Actions.TYPE_USERNAME:
     // console.warn(state);
      return {
        ...state,
        username: action.payload,
      };
    case Actions.TYPE_PASSWORD:
      //console.warn(state);
      return {
        ...state,
        password: action.payload,
      };
    case Actions.SIGN_IN:
      console.warn(state);
      return {
        ...state,
        status: 'status updated',
      };
      case Actions.SET_ARTICLE_DETAILS:
          console.warn(state);
        return{
          ...state,
          status:action.payload
        }

    default:
      return state;
  }
};
export default TextChanger;
