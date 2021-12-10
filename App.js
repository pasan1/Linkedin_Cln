import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './Screens/MainScreens/StartScreen';
import LoginScreen from './Screens/MainScreens/LoginScreen';
import SignupScreen from './Screens/MainScreens/SignupScreen';
import TabNavScreen from './Screens/TabNavScreen/TabNavScreen';
import UserScreen from './Screens/TabNavScreen/SubScreens/UserScreen';
import Sidebar from './Screens/TabNavScreen/SubScreens/Sidebar';

const Stack = createNativeStackNavigator();

export default class App extends Component {

  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="StartScreen" options={{headerShown: false}} component={StartScreen} />
        <Stack.Screen name="LoginScreen" options={{headerShown: false}} component={LoginScreen} />
        <Stack.Screen name="SignupScreen" options={{headerShown: false}} component={SignupScreen} />
        <Stack.Screen name="TabNavScreen" options={{headerShown: false}} component={TabNavScreen} />
        <Stack.Screen name="Sidebar" options={{headerShown: false}} component={Sidebar} />
        <Stack.Screen name="UserScreen" options={{headerShown: false}} component={UserScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}
