import {CombinedState} from 'redux'

// Common
// -----------------------------------------------------------------------------

export type ErrorObj = {
    message: string
    stack?: string
}

// Models
// -----------------------------------------------------------------------------

export type Thing = {
    word: string
    pronounciation: string
    definition: string
}

// Input/response
// -----------------------------------------------------------------------------

export type ThingsLoadResponse = {
    success: boolean
    error: ErrorObj
    things: Thing[]
}

export type ThingAddResponse = {
    success: boolean
    error: ErrorObj
    thing: Thing
}

// Reducer states
// -----------------------------------------------------------------------------

export type ThingsPageState = {
    loading: boolean
    loaded: boolean
    adding: boolean
    things: Thing[]
    error: ErrorObj
}

export type AppState = CombinedState<{
    things_page: ThingsPageState,
}>

