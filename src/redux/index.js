import { createStore } from 'redux';
import postData from './reducers';

const store = createStore(postData);

export default store;
