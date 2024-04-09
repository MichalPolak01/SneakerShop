import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../Login/Screens/LoginScreen';
import SignUpScreen from '../Login/Screens/SignUpScreen';
import ProductScreen from '../User/Screens/ProductScreen';
import MainMenuScreen from '../User/Screens/MainMenuScreen';
import ShoppingCartScreen from '../User/Screens/ShoppingCartScreen';
import OrderApprovalScreen from '../Worker/Screens/OrderApprovalScreen';
import ProductManagementScreen from '../Worker/Screens/ProductManagementScreen';
import AddProductScreen from '../Worker/Screens/AddProductScreen';
import AccountSettingsScreen from '../User/Screens/AccountSettingsScreen';


const Stack = createNativeStackNavigator();

export default function NavigationSection() {
    return (
        <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name='SignUp' component={SignUpScreen} />
            <Stack.Screen name='Product' component={ProductScreen} />
            <Stack.Screen name='MainMenu' component={MainMenuScreen} />
            <Stack.Screen name='ShoppingCart' component={ShoppingCartScreen} />
            <Stack.Screen name='OrderApproval' component={OrderApprovalScreen} />
            <Stack.Screen name='ProductManagement' component={ProductManagementScreen} />
            <Stack.Screen name='AddProduct' component={AddProductScreen} />
            <Stack.Screen name='AccountSettings' component={AccountSettingsScreen} />
        </Stack.Navigator>
    );
}