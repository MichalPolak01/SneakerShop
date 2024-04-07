import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './Screens/LoginScreen';
import SignUpScreen from './Screens/SignUpScreen';
import ProductScreen from '../Menu/Screens/ProductScreen';
import MainMenuScreen from '../Menu/Screens/MainMenuScreen';

const Stack = createNativeStackNavigator();

export default function LoginSection() {
    return (
        <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name='SignUp' component={SignUpScreen} />
            <Stack.Screen name='Product' component={ProductScreen} />
            <Stack.Screen name='MainMenu' component={MainMenuScreen} />
        </Stack.Navigator>
    );
}