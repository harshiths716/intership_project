import {
  UPLOAD_DONE,
  PUBLISH_DONE,
  CANCEL_DONE,
  CLEAR_RESPONSE,
  JOIN_DONE,
  WITHDRAW_DONE,
} from '../Actions/button_action';
const Button_reducer = (state = {response: ''}, action) => {
  switch (action.type) {
    case UPLOAD_DONE:
      return {
        ...state,
        response: action.payload,
      };
    case PUBLISH_DONE:
      return {
        ...state,
        response: action.payload,
      };
    case CANCEL_DONE:
      return {
        ...state,
        response: action.payload,
      };
    case CLEAR_RESPONSE:
      return {
        ...state,
        response: '',
      };
    case JOIN_DONE:
      return {
        ...state,
        response: action.payload,
      };
    case WITHDRAW_DONE:
      return {
        ...state,
        response: action.payload,
      };
    default:
      return state;
  }
};
export default Button_reducer;
