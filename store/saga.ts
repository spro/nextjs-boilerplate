import {all, race, call, delay, put, take, takeEvery, takeLatest} from 'redux-saga/effects'

import * as api from '../lib/api'
import {actionTypes} from './actions'
import * as actions from './actions'
import log from '../lib/log'

function* logActions(action) {
    log.info('action', action)
    yield
}

// Generic request/response/error saga

function* thingsSaga(action) {
    console.log(`%c<thingsSaga>`, 'color: #60a5fa', action.input || '')
    try {
        const response = yield call(api.things.getThings)
        console.log(`%c<thingsSaga response>`, 'color: #34d399', response)
        yield put(actions.thingsComplete(response))
    } catch (error) {
        console.log(`%c<thingsSaga error>`, 'color: #f87171', error)
        yield put(actions.thingsError(error))
    }
}

function* rootSaga() {
    yield all([
        takeEvery('*', logActions),
        takeLatest(actionTypes.THINGS_LOAD, thingsSaga),
    ])
}

export default rootSaga
