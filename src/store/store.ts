// store.js
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createNewCustomerReducer from './reduces/createNewCustomer'; 
import { rootSata } from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(createNewCustomerReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSata);

export default store;
