import * as types from './types'

export function isconnecting() {
    return {
        type: types.IS_CONNECTING
    }
}

export function endconnected() {
    return {
        type: types.IS_CONNECT_END
    }
}

export function getAPI() {
    return {
        type: types.DEMO_GET_API
    }
}

export function getAPISuccess(payload) {
    return {
        type: types.DEMO_GET_API_SUCCESS,
        payload,
    }
}

export function getAPIFailed(payload) {
    return {
        type: types.DEMO_GET_API_FAILED,
        payload,
    }
}

export function resetList() {
    return {
        type: types.RESET_LIST
    }
}
