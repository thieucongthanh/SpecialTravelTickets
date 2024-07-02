import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    useColorScheme
} from 'react-native'
import React from 'react'
import CustomTextInput from '../components/CustomTextInput';
import Colors from '../constants/ColorForgot';
import BackButton from '../components/BackButton';
import CustomButton from '../components/CustomButton';

const OTPScreen = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundColor = isDarkMode ? Colors.black : Colors.white;
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="transparent"
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <BackButton />
            <Text style={styles.textForgot}>OTP Verification</Text>
            <Text style={styles.textUnderForgot}>Enter the verification code we just sent on your email address.</Text>
        </View>
    )
}

export default OTPScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textForgot: {
        marginHorizontal: 20,
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        color: Colors.black,
        marginTop: 30,

    },
    textUnderForgot: {
        marginHorizontal: 20,
        fontSize: 16,

    },
})