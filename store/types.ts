import {CombinedState} from 'redux'

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
    error: string
    things: Thing[]
}

export type ThingAddResponse = {
    success: boolean
    error: string
    thing: Thing
}

// Reducer states
// -----------------------------------------------------------------------------

export type ThingsPageState = {
    loading: boolean
    loaded: boolean
    adding: boolean
    error: Error
    response: ThingsLoadResponse
}

export type AppState = CombinedState<{
    things_page: ThingsPageState,
}>

