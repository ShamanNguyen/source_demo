import { put, takeLatest, call } from 'redux-saga/effects'
import * as types from '../actions/types'
import * as actions from '../actions'
import request from '../utils/request'

function* demoAPI() {
  yield put(actions.isconnecting())
  const response = yield call(request, 'https://facebook.github.io/react-native/movies.json')
  yield put(actions.getAPISuccess(response.movies))
  yield put(actions.endconnected())
}

export default function* demoSaga() {
  yield takeLatest(types.DEMO_GET_API, demoAPI)
}
