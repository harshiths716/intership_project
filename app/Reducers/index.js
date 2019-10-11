import { combineReducers, createStore,applyMiddleware } from 'redux';
//import apiMiddleware from "../middleware/api";
import createSagaMiddleware from "redux-saga";
import mySagaLogin from "../sagas/saga_login";
import data from "./data";
import mySagaUpcoming from '../sagas/saga_upcoming'
import mySagaAssignedEvents from '../sagas/saga_assignedEvents'
import mySagaAssignedEventsaccept from '../sagas/saga_acceptEvent'
import subtodos from '../Reducers/subtodo'
import TextChanger from './TextChanger'
//import todos from './todos'
import visibilityFilter from './visibilityFilter'
import todos from './todo'
import AssignedEvents from './assignedEvents'
const AppReducers = combineReducers({
   TextChanger,
    data,
    todos,
    visibilityFilter,
    AssignedEvents,
    subtodos
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
sagaMiddleware.run(mySagaUpcoming)
sagaMiddleware.run(mySagaAssignedEvents)
sagaMiddleware.run(mySagaAssignedEventsaccept)