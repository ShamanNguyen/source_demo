
import React, { Component } from 'react'
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation'
import Welcome from './screens/Welcome'
import Home from './screens/Home'

export const StackScreen = createStackNavigator(
  {
    welcome: Welcome,
    home: Home
  },
  {
    initialRouteName: 'welcome',
  },
)

class AppRouters extends Component {
  state = {}

  render() {
    const App = createAppContainer(
      createSwitchNavigator(
        {
          stack: StackScreen,
        },
        {
          initialRouteName: 'stack',
        },
      ),
    )
    return <App />
  }
}

export default AppRouters
