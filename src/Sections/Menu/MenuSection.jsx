import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Login/Screens/LoginScreen';
import ProductScreen from './Screens/ProductScreen';
import MainMenuScreen from '../Menu/Screens/MainMenuScreen';

const Stack = createNativeStackNavigator();

export default function MenuSection() {
    return (
        <Stack.Navigator initialRouteName='Product' screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name='MainMenu' component={MainMenuScreen} />
            <Stack.Screen name='Product' component={ProductScreen} />
        </Stack.Navigator>
    );
}