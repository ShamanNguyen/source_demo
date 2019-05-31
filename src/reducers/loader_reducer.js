import * as types from '../actions/types'

const INITIAL_STATE = {
    isLoading: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.IS_CONNECTING:
            return { ...state, isLoading: true }
        case types.IS_CONNECT_END:
            return { ...state, isLoading: false }
        default:
            return state
    }
}
