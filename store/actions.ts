import {END} from 'redux-saga'
import {
    Thing,
    ThingsLoadResponse,
    ThingAddResponse
} from './types'
import {errorToJson} from '../lib/helpers'

export {END}

export const actionTypes = {
    THINGS_LOAD: 'THINGS_LOAD',
    THINGS_LOAD_COMPLETE: 'THINGS_LOAD_COMPLETE',
    THINGS_LOAD_ERROR: 'THINGS_LOAD_ERROR',

    THING_ADD: 'THING_ADD',
    THING_ADD_COMPLETE: 'THING_ADD_COMPLETE',
    THING_ADD_ERROR: 'THING_ADD_ERROR',

    HYDRATE: 'HYDRATE',
}

// Things load
// -----------------------------------------------------------------------------

export function thingsLoad() {
    return {type: actionTypes.THINGS_LOAD}
}

export function thingsLoadComplete(response: ThingsLoadResponse) {
    return {type: actionTypes.THINGS_LOAD_COMPLETE, response}
}

export function thingsLoadError(error: Error) {
    return {type: actionTypes.THINGS_LOAD_ERROR, error: errorToJson(error)}
}

// Thing add
// -----------------------------------------------------------------------------

export function thingAdd(thing: Thing) {
    return {type: actionTypes.THING_ADD, thing}
}

export function thingAddComplete(response: ThingAddResponse) {
    return {type: actionTypes.THING_ADD_COMPLETE, response}
}

export function thingAddError(error: Error) {
    return {type: actionTypes.THING_ADD_ERROR, error: errorToJson(error)}
}
