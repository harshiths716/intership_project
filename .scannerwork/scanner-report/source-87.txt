import { RECEIVE_API_DATA } from "../Actions/mock_actions";


const dataReducer =(state = {}, action) => {
 
  switch (action.type) {
    
    case RECEIVE_API_DATA:

      return action.data;
      
    default:
      return state;
  }
};

export default dataReducer