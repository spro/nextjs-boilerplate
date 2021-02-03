import {createAction, PayloadAction, PrepareAction} from '@reduxjs/toolkit'
import {END} from 'redux-saga'
import {HYDRATE} from 'next-redux-wrapper'
import {
    ErrorObj,
    Thing,
    ThingsLoadResponse,
    ThingAddResponse
} from './types'

export {END, HYDRATE}

const prepareError: PrepareAction<ErrorObj> = (error: Error | string | ErrorObj) => {
    if (error instanceof Error) {
        return {payload: {message: error.message, stack: error.stack}}
    } else if (typeof error == "string") {
        return {payload: {message: error}}
    } else {
        return {payload: error}
    }
}

// Things load
// -----------------------------------------------------------------------------

export const thingsLoad = createAction<void>('THINGS_LOAD')
export const thingsLoadComplete = createAction<ThingsLoadResponse>('THINGS_LOAD_COMPLETE')
export const thingsLoadError = createAction('THINGS_LOAD_ERROR', prepareError)

// Thing add
// -----------------------------------------------------------------------------

export const thingAdd = createAction<Thing>('THING_ADD')
export const thingAddComplete = createAction<ThingAddResponse>('THING_ADD_COMPLETE')
export const thingAddError = createAction('THING_ADD_ERROR', prepareError)
