import * as types from '../actions/types'

const INITIAL_STATE = {
    datasource: [],
    error: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.DEMO_GET_API_SUCCESS:
            return { ...state, datasource: action.payload }
        case types.DEMO_GET_API_FAILED:
            return { ...state, error: 'Error When Fetch API' }
        case types.RESET_LIST:
            return { ...state, datasource: [] }
        default:
            return state
    }
}
