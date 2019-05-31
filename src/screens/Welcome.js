import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

class Welcome extends Component {
    handlePressButton = () => {
        this.props.navigation.navigate('home')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Welcome to Demo App</Text>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={this.handlePressButton}
                > 
                    <Text style={styles.buttonText}>
                        Go To Home Screen
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

Welcome.propTypes = {
    navigation: PropTypes.object.isRequired,
}

export default Welcome