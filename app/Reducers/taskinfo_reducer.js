import {ADD_TASK} from '../Actions/taskinfo_actions'
const Taskinfo_reducer = (state =[],action) => {
  switch (action.type) {
    case ADD_TASK:
      console.warn('my',action.payload)
        return[
            ...state, {
                tName: action.tName,
                description: action.description,
                ownership:action.ownership,
            Budget:action.Budget
                     }
        ]
    default:
      return state;
  }
};
export default Taskinfo_reducer;
