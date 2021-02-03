import {CombinedState} from 'redux'

// Models
// -----------------------------------------------------------------------------

export type Thing = {
    id: number
    title: string
    description: string
}

// Input/response
// -----------------------------------------------------------------------------

export type ThingsResponse = {
    success: boolean
    error: string
    things: Thing[]
}

// Reducer states
// -----------------------------------------------------------------------------

export type ThingsPageState = {
    loading: boolean
    error: Error
    response: ThingsResponse
}

export type AppState = CombinedState<{
    things_page: ThingsPageState,
}>

