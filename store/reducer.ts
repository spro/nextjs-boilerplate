import {combineReducers} from 'redux'
import {createReducer} from '@reduxjs/toolkit'
import {HYDRATE} from 'next-redux-wrapper'

import {AppState} from './types'
import * as actions from './actions'
import initialState from './state'

const thingsPageReducer = createReducer(initialState.things_page, (builder) => { builder
    .addCase(actions.thingsLoad, (state, action) => {
        state.loading = true
        state.loaded = false
        state.error = null
    })
    .addCase(actions.thingsLoadComplete, (state, action) => {
        state.loading = false
        state.loaded = true
        if (action.payload.error)
            state.error = action.payload.error
        else
            state.things = action.payload.things
    })
    .addCase(actions.thingsLoadError, (state, action) => {
        state.loading = false
        state.loaded = true
        state.error = action.payload
    })

    .addCase(actions.thingAdd, (state, action) => {
        state.adding = true
    })
    .addCase(actions.thingAddComplete, (state, action) => {
        state.adding = false
        state.things.unshift(action.payload.thing)
    })
    .addCase(actions.thingAddError, (state, action) => {
        state.adding = false
        state.error = action.payload
    })
})

// Combined state
// -----------------------------------------------------------------------------

const combinedReducer = combineReducers({
    things_page: thingsPageReducer
})

function rootReducer(state: AppState = initialState, action) {
    switch (action.type) {
        case HYDRATE: return {...state, ...action.payload}
        default: return combinedReducer(state, action)
    }
}

export default rootReducer
