import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'

import AllReducers from "./reducers/AllReducers";
import rootSaga from "./saga/rootSaga";

let initialState = {
	currency: {
		fetching: false,
		base: "",
		rates: []
	},
	autosuggest: {
		value: "",
		suggestions: []
	},
	date: ""
}

const sagaMiddleware = createSagaMiddleware();

let Store = createStore(AllReducers, initialState, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default Store;
