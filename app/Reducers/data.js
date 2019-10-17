import { RECEIVE_API_DATA } from "../Actions/mock_actions";

//console.warn('i am inside data ')

const dataReducer =(state = {}, action) => {
 // console.warn(action.type+" this is the action type dispatched ");
  switch (action.type) {
    
    case RECEIVE_API_DATA:
    //    console.warn('i am inside RECEIVE_API_DATA ')

      return action.data;
      
    default:
      return state;
  }
};

export default dataReducer