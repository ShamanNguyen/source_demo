import { all } from 'redux-saga/effects'
import demoSaga from './demo_saga'

export default function* rootSagas() {
  yield all([
    demoSaga(),
  ])
}
