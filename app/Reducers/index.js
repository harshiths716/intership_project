import { combineReducers, createStore,applyMiddleware } from 'redux';
//import apiMiddleware from "../middleware/api";
import createSagaMiddleware from "redux-saga";
import mySagaLogin from "../sagas/saga_login";
import data from "./data";
import mySagaAssignedEvents from '../sagas/saga_assignedEvents'
import subtodos from '../Reducers/subtodo'
import TextChanger from './TextChanger'
import mySagaCreateEvent from '../sagas/create_event_saga' 
import visibilityFilter from './visibilityFilter'
import todos from './todo'
import CreateEvent from '../Reducers/create_event_reducer'
import AssignedEvents from './assignedEvents'
const AppReducers = combineReducers({
   TextChanger,
    data,
    todos,
    visibilityFilter,
    AssignedEvents,
    subtodos,
    CreateEvent
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