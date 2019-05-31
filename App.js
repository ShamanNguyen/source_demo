import React from 'react'
import { Provider } from 'react-redux'
import store from './src/store'
import AppLoading from './src/AppLoading'

export default () => (
  <Provider store={store}>
    <AppLoading />
  </Provider>
)
