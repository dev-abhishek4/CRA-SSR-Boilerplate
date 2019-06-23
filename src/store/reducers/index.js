import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import auth from './authReducer';
import test from './testReducer';

// pass multiple reducers seperated by comma
export default (history) => combineReducers({
    router: connectRouter(history),
    auth,
    test,
});