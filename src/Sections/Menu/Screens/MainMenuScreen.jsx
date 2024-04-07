import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, ToastAndroid, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { styles } from '../Styles/MainMenuScreenStyle';
import TopNavigationPanel from '../Navigation/TopNavigationPanel';
import BottomNavigationPanel from '../Navigation/BottomNavigationPanel';
import { Product, ProductsList } from '../Models/Product';

export default function MainMenuScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.body}>
            <TopNavigationPanel/>
            <ScrollView contentContainerStyle={styles.mainContainer}>
                {ProductsList.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </ScrollView>
            <BottomNavigationPanel/>
        </View>
    )
}

function ProductItem({ product }) {
    return (
        <View style={styles.productContainer}>
            <Image style={styles.productImage} source={product.image} />
            <View style={styles.infoProductContainer}>
                <Text style={styles.infoProductText}>{product.name}</Text>
                <Text style={styles.infoProductText}>{product.price} zł</Text>
            </View>
        </View>
    )
}