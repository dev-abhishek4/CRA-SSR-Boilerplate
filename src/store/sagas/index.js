import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actionTypes';

import { testSaga } from './testSaga';

export function* watchStatus() {
    yield takeEvery(actionTypes.TEST_SAGA, testSaga);
}