import { all } from 'redux-saga/effects'
import authSaga from './auth_saga'

export default function* rootSagas() {
  yield all([
    authSaga(),
  ])
}
