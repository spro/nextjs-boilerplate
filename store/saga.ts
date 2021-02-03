import {all, race, call, delay, put, take, takeEvery, takeLatest} from 'redux-saga/effects'

import * as api from '../lib/api'
import {actionTypes} from './actions'
import * as actions from './actions'
import log from '../lib/log'

function* logActions(action) {
    log.info('action', action)
    yield
}

function* thingsSaga(action) {
    try {
        const response = yield call(api.things.getThings)
        yield put(actions.thingsLoadComplete(response))
    } catch (error) {
        yield put(actions.thingsLoadError(error))
    }
}

function* thingAddSaga(action) {
    try {
        const response = yield call(api.things.addThing, action.thing)
        yield put(actions.thingAddComplete(response))
    } catch (error) {
        yield put(actions.thingAddError(error))
    }
}

function* rootSaga() {
    yield all([
        takeEvery('*', logActions),
        takeLatest(actionTypes.THINGS_LOAD, thingsSaga),
        takeLatest(actionTypes.THING_ADD, thingAddSaga),
    ])
}

export default rootSaga
