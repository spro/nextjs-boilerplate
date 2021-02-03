import {all, race, call, delay, put, take, takeEvery, takeLatest} from 'redux-saga/effects'
import {PayloadAction} from '@reduxjs/toolkit'

import {Thing} from './types'
import * as actions from './actions'
import * as api from '../lib/api'
import log from '../lib/log'

function* logActions(action: any) {
    log.info('action', action)
    yield
}

function* thingsSaga() {
    try {
        const response = yield call(api.things.getThings)
        yield put(actions.thingsLoadComplete(response))
    } catch (error) {
        yield put(actions.thingsLoadError(error))
    }
}

function* thingAddSaga(action: PayloadAction<Thing>) {
    try {
        const response = yield call(api.things.addThing, action.payload)
        yield put(actions.thingAddComplete(response))
    } catch (error) {
        yield put(actions.thingAddError(error))
    }
}

function* rootSaga() {
    yield all([
        takeEvery('*', logActions),
        takeLatest(actions.thingsLoad.type, thingsSaga),
        takeLatest(actions.thingAdd.type, thingAddSaga),
    ])
}

export default rootSaga
