import {
  ADD_ORGANIZER,
  ADD_DESC,
  ADD_DEADLINE,
  ADD_LISTHOLDER,
  ADD_BUDGET,
  DELETE_ARRAY
} from '../Actions/taskinfo_actions';

const Taskinfo_reducer = (
  state = [],
  action,
) => {
  switch (action.type) {
    case ADD_ORGANIZER:
      console.warn('organnizer', action.payload);
      return  [
        ...state, action.payload
    ]
    case DELETE_ARRAY:
      console.warn('DELETE_ARRAY', action.payload)
      // var vam=[];
      return state.map(item =>
        (item.id === action.payload && item.flag !==false )
            ? {...item,flag:!item.flag} :
            item)

    case ADD_DEADLINE:
      console.warn('my', action.payload);
      return {
        ...state,
        deadline: action.payload,
      };
    case ADD_BUDGET:
      console.warn('my', action.payload);
      return {
        ...state,
        Budget: action.payload,
      };
      case ADD_LISTHOLDER:
      console.warn('my', action.payload);
      return {
        ...state,
        listHolder: action.payload,
      };
    default:
      return state;
  }
};
export default Taskinfo_reducer;
