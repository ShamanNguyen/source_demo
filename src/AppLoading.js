import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import AppRouters from './AppRouters'

class LoadingAsync extends Component {
  state = {}

  componentDidMount() {
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <AppRouters />
      </View>
    )
  }
}

export default LoadingAsync

LoadingAsync.propTypes = {}

LoadingAsync.defaultProps = {}
