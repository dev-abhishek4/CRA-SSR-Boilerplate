import * as actionTypes from '../actionTypes';

export const loginAction = () => {
    return {
        type: actionTypes.LOGIN
    }
}

export const logoutAction = () => {
    return {
        type: actionTypes.LOGOUT
    }
}