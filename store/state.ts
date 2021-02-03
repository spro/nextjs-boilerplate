import {AppState} from './types'

const initialState: AppState = {
    things_page: {
        loading: true,
        loaded: false,
        response: null,
        error: null
    }
}

export default initialState
