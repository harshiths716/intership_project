import {REJECT_EVENT_DONE,ACCEPT_EVENT_API,ACCEPT_EVENT_DONE} from '../Actions/eventsAssigned'
const AssignedEvents = (state = {acceptapi:'',apicall:false},action) => {
  switch (action.type) {
    case ACCEPT_EVENT_API:
        return{
            ...state,
            acceptapi:action.payload
        }
        case ACCEPT_EVENT_DONE:
          return{
              ...state,
              apicall:true
          }
          case REJECT_EVENT_DONE:
          return{
              ...state,
              apicall:true
          }
    default:
      return state;
  }
};
export default AssignedEvents;
