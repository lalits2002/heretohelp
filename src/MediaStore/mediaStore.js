import { createStore, applyMiddleware } from 'redux';
import Reducer from './reducer';

// Note: this API requires redux@>=3.1.0
const mediaStore = createStore(Reducer);

export default mediaStore;