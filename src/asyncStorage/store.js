import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducer from './reducer';

// Note: this API requires redux@>=3.1.0
const store = createStore(Reducer, applyMiddleware(thunk));

export default store;