import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../Styles/OrderApprovalScreenStyle';
import TopNavigationPanel from '../../Navigation/Panels/TopNavigationPanel';
import BottomNavigationPanel from '../../Navigation/Panels/BottomNavigationPanel';
import { ShopList } from '../../User/Models/Product';

export default function OrderApprovalScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.body}>
            <TopNavigationPanel/>
            <ScrollView contentContainerStyle={styles.mainContainer}>
                {ShopList.map((set, index) => ( // Added 'index' as a parameter
                    <SetItem key={index} products={set.products} /> // Changed key to use 'index'
                ))}
            </ScrollView>
            <BottomNavigationPanel/>
        </View>
    )
}

function SetItem({ products }) {
    return (
        <View style={styles.setContainer}>
            <View style={{marginTop: 25}}>
                {products.map((product, index) => ( // Added 'index' as a parameter
                    <CartItem key={index} product={product} /> // Changed key to use 'index'
                ))}
            </View>
            <TouchableOpacity style={styles.shipButton}>
                 <Image style={styles.cashImage} source={require('../../../../assets/Images/Worker/AcceptShipIcon.png')} />
                 <Text style={styles.payForCartText}> Shipped</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.trashContainer}>
                <Image style={styles.trashIcon} source={require('../../../../assets/Images/Menu/TrashIcon.png')} />
            </TouchableOpacity>
        </View>
    );
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
                    <Text style={{...styles.sizeText, fontWeight: "bold"}}>  41</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.payForCartText}>{product.price.toFixed(2)} zł</Text>
                </View>
            </View>
        </View>
    );
}
