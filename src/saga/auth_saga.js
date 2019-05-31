import { takeLatest } from 'redux-saga/effects'
// import axios from 'axios'

import * as types from '../actions/types'

function* syncVerify(action) {
  yield console.log('syncVerify', action)
}

export default function* authSaga() {
  yield takeLatest(types.IS_CONNECTING, syncVerify)
}
