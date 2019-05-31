import { StyleSheet } from 'react-native'
import { setValue } from '../utils/utils'
import Constants from '../constants'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        marginLeft: '10%',
        marginTop: '10%',
        fontFamily: 'Comfortaa-Bold',
        fontSize: setValue(26, 22)
    },
    buttonStyle: {
        position: 'absolute',
        bottom: '20%',
        borderRadius: 8,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: Constants.HEIGHT_BUTTON,
        width: '80%',
        backgroundColor: '#19a784',
    },
    buttonText: {
        fontFamily: 'Comfortaa-Bold',
        fontSize: 18,
        fontStyle: 'normal',
        lineHeight: 23,
        letterSpacing: 1,
        textAlign: 'center',
        color: '#ffffff',
    },
    text: {
        opacity: 0.8,
        fontFamily: 'Comfortaa-Regular',
        fontSize: setValue(18, 16),
        fontWeight: 'normal',
        fontStyle: 'normal',
        letterSpacing: 0,
        color: '#000000',
    },
})

export default styles