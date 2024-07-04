import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  useColorScheme,
  Text,
  ToastAndroid,
  TouchableOpacity

} from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import Colors from '../constants/ColorForgot';
import BackButton from '../components/BackButton';
import CustomButton from '../components/CustomButton';
import Color from '../constants/ColorForgot';
import stylescontainer from '../styles/screens/ContainerForgot_style';

function ForgotScreen() {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = stylescontainer(isDarkMode);
  const backgroundColor = isDarkMode ? Colors.black : Colors.white;
  // Handle login functionality
  const handleSendCode = async () => {
    ToastAndroid.show('Send Code Successfull', ToastAndroid.SHORT);
  };
  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <StatusBar
        backgroundColor="transparent"
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <View style={styles.content}>
        <BackButton />
        <Text style={styles.textForgot}>Forgot Password?</Text>
        <Text style={styles.textUnderForgot}>Don't worry! It occurs. Please enter the email address linked with your account.</Text>
        <View style={styles.inputContainer}>
          <CustomTextInput
            isDarkMode={isDarkMode}
            placeholder={'Enter your email'}
          />
        </View>

        <CustomButton
          style={{ margin: 20, }}
          title={'Send Code'}
          onPress={handleSendCode}
        />
        <View style={styles.containertxtsignup}>
          <Text style={styles.textsignupdonthave}>Remember Password?</Text>
          <TouchableOpacity>
            <Text style={styles.signupText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default ForgotScreen;