import { createStore, Store, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';

import rootReducers from "./ducks/rootReducers";
import { RepositoriesState } from "./ducks/repositories/types";
import rootSaga from "./ducks/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

export default store;


export interface ApplicationState {
  repositories: RepositoriesState
}

