import {AppState} from './types'

const initialState: AppState = {
    things_page: {
        loading: false,
        loaded: false,
        adding: false,
        things: [],
        error: null
    }
}

export default initialState
