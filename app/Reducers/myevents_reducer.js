import {PARTICIPATED_EVENT_DONE,ORGANIZED_EVENT_DONE} from '../Actions/myevents_actions'
const Myevents = (state = {organizedapi:'',participatedapi:'',apicall:false},action) => {
  switch (action.type) {
    case ORGANIZED_EVENT_DONE:
      console.warn(action.payload)
        return{
            ...state,
            organizedapi:action.payload
        }
        case PARTICIPATED_EVENT_DONE:
          return{
              ...state,
              organizedapi:action.payload
            }
    default:
      return state;
  }
};
export default Myevents;
