
import {RECEIVE_USER_DETAILS,receiveUserDetails,CREATE_EVENT_API_DONE} from '../Actions/create_event_action'
const CreateEvent = (state = {createEventid:'',userdetails:[]},action) => {
  switch (action.type) {
    case CREATE_EVENT_API_DONE:
        
        return{
            ...state,
            createEventid:action.payload
        }
    case RECEIVE_USER_DETAILS:
        return{
            ...state,
            userdetails:action.payload
        }

    default:
      return state;
  }
};
export default CreateEvent;
