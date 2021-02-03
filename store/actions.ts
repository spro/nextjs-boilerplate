import {createAction} from '@reduxjs/toolkit'
import {END} from 'redux-saga'
import {HYDRATE} from 'next-redux-wrapper'
import {
    Thing,
    ThingsLoadResponse,
    ThingAddResponse
} from './types'

export {END, HYDRATE}

// Things load
// -----------------------------------------------------------------------------

export const thingsLoad = createAction<void>('THINGS_LOAD')
export const thingsLoadComplete = createAction<ThingsLoadResponse>('THINGS_LOAD_COMPLETE')
export const thingsLoadError = createAction<Error>('THINGS_LOAD_ERROR')

// Thing add
// -----------------------------------------------------------------------------

export const thingAdd = createAction<Thing>('THING_ADD')
export const thingAddComplete = createAction<ThingAddResponse>('THING_ADD_COMPLETE')
export const thingAddError = createAction<Error>('THING_ADD_ERROR')
