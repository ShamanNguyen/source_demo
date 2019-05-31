import { combineReducers } from 'redux'
import loaderReducer from './loader_reducer'
import dataReducer from './data_reducer'

const rootReducer = combineReducers({
  loader: loaderReducer,
  data: dataReducer,
})

export default rootReducer
