import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from '../reducers'
import rootSagas from '../saga'

/* eslint-disable no-underscore-dangle */
const sagaMiddleware = createSagaMiddleware()

store = createStore(reducers, {}, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSagas)
export default store 

