import { combineReducers, createStore,applyMiddleware } from 'redux';
//import apiMiddleware from "../middleware/api";
import createSagaMiddleware from "redux-saga";
import mySagaLogin from "../sagas/saga_login";
import data from "./data";
import mySagaUpcoming from '../sagas/saga_upcoming'

import TextChanger from './TextChanger'
//console.warn('iam in store')
const AppReducers = combineReducers({
   TextChanger,
    data
});
const sagaMiddleware = createSagaMiddleware();

const rootReducer = (state, action) => {
	return AppReducers(state,action);
}

let store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
//console.warn('iam in mid')


export default store;
// then run the saga

sagaMiddleware.run(mySagaLogin);
sagaMiddleware.run(mySagaUpcoming)