import {actionTypes} from './actions'
import {combineReducers} from 'redux'
import {HYDRATE} from 'next-redux-wrapper'
import produce from 'immer'
import {AppState, ThingsPageState} from './types'
import initialState from './state'

const thingsPageReducer = produce((state: ThingsPageState, action) => {
    switch (action.type) {

        case actionTypes.THINGS_LOAD:
            state.loading = true
            state.loaded = false
            break

        case actionTypes.THINGS_LOAD_COMPLETE:
            state.loading = false
            state.loaded = true
            state.response = action.response
            break

        case actionTypes.THINGS_LOAD_ERROR:
            state.loading = false
            state.loaded = true
            state.error = action.error
            break

        case actionTypes.THING_ADD_COMPLETE:
            state.response?.things?.unshift(action.response.thing)
            break
    }

}, initialState.things_page)

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
