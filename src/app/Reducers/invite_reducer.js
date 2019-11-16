import {GET_DESIGNATION_DONE,SEND_INVITE_API_DONE} from '../Actions/invite_action'

const Invite = (state = {desigdata:'',invitesapidata:''}, action) => {
    switch (action.type) {
        
              case GET_DESIGNATION_DONE:
              return  {
                ...state,
                desigdata: action.payload,
              };
              case SEND_INVITE_API_DONE:
                return  {
                  ...state,
                  invitesapidata: action.payload,
                };
        default:
            return state
    }
}

export default Invite