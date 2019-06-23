import * as actionTypes from '../actionTypes';
import { updateObject } from '../utility';

const initialState = {
    username: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.TEST:
            return updateObject(state, {username: action.paramsName});

        default:
            return state;
    }
}

export default reducer;