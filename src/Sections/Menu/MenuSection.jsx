import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Login/Screens/LoginScreen';
import ProductScreen from '../Menu/Screens/ProductScreen';

const Stack = createNativeStackNavigator();

export default function MenuSection() {
    return (
        <Stack.Navigator initialRouteName='Product' screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name='Product' component={ProductScreen} />
        </Stack.Navigator>
    );
}