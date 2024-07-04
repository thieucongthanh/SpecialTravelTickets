import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ForgotScreen from './src/screens/ForgotScreen';
import ResetPassWord from './src/screens/ResetPassWordScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import OTPScreen from './src/screens/OTPScreen';
const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
<<<<<<< Updated upstream
      <Stack.Navigator initialRouteName='ForgotScreen'>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerTitle: 'Register' }} />
        <Stack.Screen name="ForgotScreen" component={ForgotScreen} options={{ headerShown: false }} />
        <Stack.Screen name="OTPScreen" component={OTPScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ResetPassWord" component={ResetPassWord} options={{ headerTitle: 'Reset Password' }} />
      </Stack.Navigator>
    </NavigationContainer>
=======
    <Stack.Navigator initialRouteName='ForgotScreen'>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerTitle: 'Register' }} />
      <Stack.Screen name="ForgotScreen" component={ForgotScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ResetPassWord" component={ResetPassWord} options={{ headerTitle: 'Reset Password' }} />
      <Stack.Screen name="ChangePasswordSuccess" component={ChangePasswordSuccess} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>

>>>>>>> Stashed changes
  );
}
export default App;
