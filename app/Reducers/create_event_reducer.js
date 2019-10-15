
import {RECEIVE_USER_DETAILS,receiveUserDetails} from '../Actions/create_event_action'
const CreateEvent = (state = {userdetails:''},action) => {
  switch (action.type) {
    case RECEIVE_USER_DETAILS:
        console.warn("inside reducer")
        return{
            ...state,
            userdetails:action.payload
        }

    default:
      return state;
  }
};
export default CreateEvent;
