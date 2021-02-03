import {AppState} from './types'

const initialState: AppState = {
    things_page: {
        loading: false,
        loaded: false,
        adding: false,
        response: null,
        error: null
    }
}

export default initialState
