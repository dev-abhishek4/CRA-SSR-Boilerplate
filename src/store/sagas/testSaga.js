import { put } from "redux-saga/effects";

import * as actionTypes from "../actionTypes";

export function* testSaga(action) {
    try {
        // some task
        yield put({
            ...action,
            type: actionTypes.TEST
        })
    } catch (err) {
        console.log(err);
    }
}