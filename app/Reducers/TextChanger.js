import * as Actions from '../Actions/Login_ActionTypes';

const TextChanger = (state = {username: '', password: '', status:''},action,) => {
  switch (action.type) {
    case Actions.TYPE_USERNAME:
      // console.warn(state);
      return {
        ...state,
        username: action.payload,
      };
    case Actions.TYPE_PASSWORD:
      console.warn(action.payload);
      return {
        ...state,
        password: action.payload,
      };
    case Actions.SIGN_IN:
        console.warn(action.payload);
      return {
        ...state,
        status: 'sddk',
      };
    case Actions.SET_ARTICLE_DETAILS:
      console.warn(state);
      return {
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
};
export default TextChanger;
