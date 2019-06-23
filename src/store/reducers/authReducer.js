import * as actionTypes from '../actionTypes';
import { updateObject } from '../utility';

const initialState = {
    isAuthenticated: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return updateObject(state, { isAuthenticated: true });
        case actionTypes.LOGOUT:
            return updateObject(state, { isAuthenticated: false })
        default:
            return state;
    }
}

export default authReducer;