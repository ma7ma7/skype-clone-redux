import { createStore } from 'redux';
import reducer from '../reducers';
import { contacts } from '../static-data';

console.log(contacts);

const store = createStore(reducer, {});

export default store;
