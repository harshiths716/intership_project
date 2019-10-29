import { combineReducers, createStore,applyMiddleware } from 'redux';
//import apiMiddleware from "../middleware/api";
import createSagaMiddleware from "redux-saga";
import mySagaLogin from "../sagas/saga_login";
import data from "./data";
import mySagaAssignedEvents from '../sagas/saga_assignedEvents'
import subtodos from '../Reducers/subtodo'
import TextChanger from './TextChanger'
import AssignedEvents from './assignedEvents'
import Myevents from './myevents_reducer'
import mySagaCreateEvent from '../sagas/create_event_saga' 
import visibilityFilter from './visibilityFilter'
import todos from './todo'
import CreateEvent from '../Reducers/create_event_reducer'
import mySagaMyeventsEvents from '../sagas/myevent_saga'
import Taskinfo_reducer from './taskinfo_reducer'
import Task from './Task_reducer'
import mySagaTask from '../sagas/Task_saga'
const AppReducers = combineReducers({
   TextChanger,
   CreateEvent,
   Myevents,
    data,
    todos,
    visibilityFilter,
    AssignedEvents,
    subtodos,
    CreateEvent,
    Taskinfo_reducer,Task
});
const sagaMiddleware = createSagaMiddleware();

// const rootReducer = (state, action) => {
// 	return AppReducers(state,action);
// }

let store = createStore(AppReducers,applyMiddleware(sagaMiddleware));
//console.warn('iam in mid')


export default store;
// then run the saga

sagaMiddleware.run(mySagaLogin)
sagaMiddleware.run(mySagaAssignedEvents)
sagaMiddleware.run(mySagaCreateEvent)
sagaMiddleware.run(mySagaMyeventsEvents)
sagaMiddleware.run(mySagaTask)