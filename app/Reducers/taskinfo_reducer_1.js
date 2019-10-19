import {
  ADD_ORGANIZER,
  ADD_DESC,
  ADD_DEADLINE,
  ADD_LISTHOLDER,
  ADD_BUDGET,
} from '../Actions/taskinfo_actions';

const Taskinfo_reducer = (
  state = [],
  action,
) => {
  switch (action.type) {
    case ADD_ORGANIZER:
      console.warn('my', action.payload);
      return  [
        ...state, {
          ownership: action.payload,
            text: action.text,
            completed: false
        }
    ]
    case ADD_DESC:
      console.warn('my', action.payload);
      return {
        ...state,
        description: action.payload,
      };
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
