import {END} from 'redux-saga'
export {END}

import {
    ThingsResponse
} from './types'

export const actionTypes = {
    THINGS_LOAD: 'THINGS_LOAD',
    THINGS_COMPLETE: 'THINGS_COMPLETE',
    THINGS_ERROR: 'THINGS_ERROR',

    HYDRATE: 'HYDRATE',
}

// Things load
// -----------------------------------------------------------------------------

export function thingsLoad() {
    return {type: actionTypes.THINGS_LOAD}
}

export function thingsComplete(response: ThingsResponse) {
    return {type: actionTypes.THINGS_COMPLETE, response}
}

export function thingsError(error: Error) {
    return {type: actionTypes.THINGS_ERROR, error}
}

