import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, ToastAndroid, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { styles } from '../Styles/ShoppingCartScreenStyle';
import TopNavigationPanel from '../Navigation/TopNavigationPanel';
import BottomNavigationPanel from '../Navigation/BottomNavigationPanel';
import { Product, CartList } from '../Models/Product';

export default function ShoppingCartScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.body}>
            <TopNavigationPanel/>
            <ScrollView contentContainerStyle={styles.mainContainer}>
            <View>
                {CartList.map((product) => (<CartItem key={product.id} product={product} />))}
            </View>      
            </ScrollView>
            
            <TouchableOpacity style={styles.payForCartButton}>
                 <Image style={styles.cashImage} source={require('../../../../assets/Images/Menu/CashIcon.png')} />
                 <Text style={styles.payForCartText}>{SumCart(CartList)} zł</Text>
            </TouchableOpacity>
            <BottomNavigationPanel/>
        </View>
    )
}

function CartItem({ product }) {
    return (
        <View style={styles.cartProduct}>
                    <View style={styles.productImageContainer}>
                        <Image style={styles.productImage} source={product.image} />
                    </View>
                    <View style={styles.productInfoContainer}>
                        <Text style={styles.nameProductText}>{product.name}</Text>
                        <View style={styles.sizeContainer}>
                            <Text style={styles.sizeText}>Rozmiar</Text>
                            <Text style={{...styles.sizeText, fontWeight:'bold', fontSize: 21}}>  41</Text>
                        </View>
                        <View style={styles.priceContainer}>
                            <Text style={{ ...styles.payForCartText, fontSize: 20}}>{product.price} zł</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.trashContainer} >
                        <Image style={styles.trashIcon} source={require('../../../../assets/Images/Menu/TrashIcon.png')} />
                    </TouchableOpacity>
        </View>
    );
}

function SumCart(CartList){
    let sum = 0; // Initialize sum
    for(let i=0 ; i< CartList.length; i++){ // Corrected typo and loop condition
        sum += CartList[i].price;
    }
    return sum;
}