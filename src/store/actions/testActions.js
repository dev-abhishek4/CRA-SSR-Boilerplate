import * as actionTypes from '../actionTypes';

export const testAction = (paramsIfAny) => {
    return {
        type : actionTypes.TEST_SAGA,
        paramsName : paramsIfAny
    }
}