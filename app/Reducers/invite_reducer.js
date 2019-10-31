import {GET_DESIGNATION_DONE} from '../Actions/invite_action'

const Invite = (state = {desigdata}, action) => {
    switch (action.type) {
        
              case GET_DESIGNATION_DONE:
              return  {
                ...state,
                desigdata: action.payload,
              };
        default:
            return state
    }
}

export default Invite