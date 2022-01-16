import contacts from './contacts';
import user from './user';
import activeUserId from './activeUserId';
import { combineReducers } from 'redux';

export default combineReducers({ user, contacts, activeUserId });
