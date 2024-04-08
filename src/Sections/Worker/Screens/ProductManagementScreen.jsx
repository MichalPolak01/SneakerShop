import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, ToastAndroid, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { styles } from '../Styles/ProductManagementScreenStyle';
import TopNavigationPanel from '../../Navigation/Panels/TopNavigationPanel';
import BottomNavigationPanel from '../../Navigation/Panels/BottomNavigationPanel';
import { CartList } from '../../User/Models/Product';

export default function ProductManagementScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.body}>
            <TopNavigationPanel/>
            <ScrollView contentContainerStyle={styles.mainContainer}>
            <View style={{marginBottom: 20}}>
                {CartList.map((product) => (<CartItem key={product.id} product={product} />))}
            </View>      
            </ScrollView>
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
                            <View style={styles.partSelectorContainer}>
                                <Text style={styles.sizeProductText}>Rozmiar</Text>
                                <View style={styles.sizeSelectorContainer}>
                                    <Text style={styles.sizeSelectorValue}>41</Text>
                                </View>
                            </View>
                            <View style={styles.partSelectorContainer}>
                                <Text style={styles.sizeProductText}>Ilość</Text>
                                <View style={styles.sizeSelectorContainer}>
                                    <Text style={styles.sizeSelectorValue}>1</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.priceContainer}>
                            <TouchableOpacity style={styles.manageButtonContainer}>
                            <Text style={styles.manageButtonText}>Dodaj</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.manageButtonContainer}>
                                <Text style={styles.manageButtonText}>Usuń</Text>
                            </TouchableOpacity>
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