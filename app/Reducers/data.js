import { RECEIVE_API_DATA } from "../Actions/actions";
console.warn('i am inside data ')

export default (state = {}, action) => {
  console.log(action.type+" this is the action type dispatched ");
  switch (action.type) {
    
    case RECEIVE_API_DATA:
        console.warn('i am inside RECEIVE_API_DATA ')

      return action.data;
    default:
      return state;
  }
};