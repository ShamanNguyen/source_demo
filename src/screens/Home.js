import React, { Component } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getAPI, resetList } from '../actions'
import styles from './styles'

class Home extends Component {
    componentDidMount() {
        this.props.resetList()
    }

    handleButtonPress = () => {
        this.props.getAPI()
    }

    renderItem = (item) => {
        const { title, releaseYear } = item
        return (
            <View style={{ height: 44, marginHorizontal: 5, flexDirection: 'row', alignItems: 'flex-end' }}>
                <Text style={{ fontFamily: 'Comfortaa-Bold', fontSize: 16 }}>{title}</Text>
                <Text style={{ fontFamily: 'Comfortaa-Regular', fontSize: 14, marginLeft: 12, opacity: 0.7 }}>{releaseYear}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>This is Home Screen</Text>
                <FlatList
                    style={{ marginTop: 30, marginLeft: '10%' }}
                    data={this.props.datasource}
                    renderItem={({item}) => this.renderItem(item)}
                    keyExtractor={({id}, index) => id}
                    />
                <TouchableOpacity
                    style={[styles.buttonStyle, { bottom: '10%' }]}
                    onPress={this.handleButtonPress}
                > 
                    <Text style={styles.buttonText}>
                        Demo API
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

Home.propTypes = {
    getAPI: PropTypes.func.isRequired,
    resetList: PropTypes.func.isRequired,
    datasource: PropTypes.array.isRequired,
}


const mapStatetoProps = ({ data }) => {
    const { datasource, error } = data
    return {
        datasource,
        error,
    }
}

export default connect(
    mapStatetoProps, {
        getAPI,
        resetList
    }
)(Home)
