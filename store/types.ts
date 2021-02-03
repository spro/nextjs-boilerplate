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
    error: Error
    things: Thing[]
}

export type ThingAddResponse = {
    success: boolean
    error: Error
    thing: Thing
}

// Reducer states
// -----------------------------------------------------------------------------

export type ThingsPageState = {
    loading: boolean
    loaded: boolean
    adding: boolean
    things: Thing[]
    error: Error
}

export type AppState = CombinedState<{
    things_page: ThingsPageState,
}>

