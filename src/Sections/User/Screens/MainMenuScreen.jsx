import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, ToastAndroid, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { styles } from '../Styles/MainMenuScreenStyle';
import TopNavigationPanel from '../../Navigation/Panels/TopNavigationPanel';
import BottomNavigationPanel from '../../Navigation/Panels/BottomNavigationPanel';
import { ProductsList } from '../Models/Product';

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
    const navigation = useNavigation();
    
    const handleProductPress = () => {
        navigation.navigate('Product', { productId: product.id });
    };

    return (
        <TouchableOpacity style={styles.productContainer} onPress={handleProductPress}>
            <Image style={styles.productImage} source={product.image} />
            <View style={styles.infoProductContainer}>
                <Text style={styles.infoProductText}>{product.name}</Text>
                <Text style={styles.infoProductText}>{product.price} zł</Text>
            </View>
        </TouchableOpacity>
    );
}
