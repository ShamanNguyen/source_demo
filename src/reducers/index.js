import { combineReducers } from 'redux'
import loaderReducer from './loader_reducer'

const rootReducer = combineReducers({
  loader: loaderReducer,
})

export default rootReducer
