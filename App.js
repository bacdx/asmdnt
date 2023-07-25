import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import Signin from './signin';
import MainScreen from './MainScreen';
const Stack = createNativeStackNavigator();
export default function App() {
  
  return (
    <NavigationContainer>
    <Stack.Navigator  initialRouteName="LoginScreen">
      <Stack.Screen   options={{headerShown: false}} name="LoginScreen" component={LoginScreen} />
      <Stack.Screen   options={{headerShown: false}} name="Signin" component={Signin} />
      <Stack.Screen   options={{headerShown: false}} name="MainScreen" component={MainScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
