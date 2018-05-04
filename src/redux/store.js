import { createStore,applyMiddleware  } from 'redux';
import reducers from './reducers.js';
import thunk from 'redux-thunk'
let createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
let store = createStoreWithMiddleware(reducers)
export default store;


