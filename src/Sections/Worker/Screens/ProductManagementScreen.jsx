import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { styles } from '../Styles/ProductManagementScreenStyle';
import TopNavigationPanel from '../../Navigation/Panels/Top/TopNavigationCleanPanel';
import BottomNavigationPanel from '../../Navigation/Panels/Bottom/BottomNavigationWorkerPanel';
import { CartList } from '../../User/Models/Product';

export default function ProductManagementScreen() {

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
    const [size, setSize] = useState(''); 
    const [quantity, setQuantity] = useState('');

    const handleSizeChange = (text) => {
        setSize(text);
    };

    const handleQuantityChange = (text) => {
        setQuantity(text);
    };
    return (
        <View style={styles.product}>
                    <View style={styles.productImageContainer}>
                        <Image style={styles.productImage} source={product.image} />
                    </View>
                    <View style={styles.productInfoContainer}>
                        <Text style={styles.nameProductText}>{product.name}</Text>
                        <View style={styles.sizeContainer}>
                            <View style={styles.partSelectorContainer}>
                                <Text style={styles.sizeProductText}>Rozmiar</Text>
                                <View style={styles.sizeSelectorContainer}>
                                    <TextInput
                                        style={styles.sizeSelectorValue}
                                        value={size}
                                        onChangeText={handleSizeChange}
                                        keyboardType="numeric"
                                    />
                                </View>
                            </View>
                            <View style={styles.partSelectorContainer}>
                                <Text style={styles.sizeProductText}>Ilość</Text>
                                <View style={{...styles.sizeSelectorContainer, width: 35}}>
                                    <TextInput
                                        style={styles.sizeSelectorValue}
                                        value={quantity}
                                        onChangeText={handleQuantityChange}
                                        keyboardType="numeric"
                                    />
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