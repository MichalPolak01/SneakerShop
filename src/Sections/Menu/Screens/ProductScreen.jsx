import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, ToastAndroid, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { styles } from '../Styles/ProductScreenStyle';
import TopNavigationPanel from '../Navigation/TopNavigationPanel';

export default function ProductScreen() {
    const navigation = useNavigation();

    const [productInfo, setProductInfo] = useState({
        category: 'Buty męskie',
        name: 'Air Jordan 1',
        size: 'Rozmiar',
        description: 'Air Jordan 1 - ikona nie tylko sportowej mody, lecz również kultury ulicznej. Te legendarnie stylowe buty, zaprojektowane przez Michaela Jordana i Petera Moore\'a w 1985 roku, podbiły serca fanów na całym świecie swoim charakterystycznym designem oraz doskonałym komfortem noszenia. Wykonane z wysokiej jakości materiałów, Air Jordan 1 to nie tylko obuwie, to symbol niepowtarzalnego stylu i nieustającej pasji do sportu. Dostępne w różnorodnych kolorach i edycjach, te buty są niezrównane pod względem jakości i prestiżu. Zainwestuj w legendę i dołącz do historii ulicznej mody z Air Jordan 1.',
        price: '499,99',
        image: require('../../../../assets/Images/Login/Icon.png')
    });
 
    return (
        <View style={styles.body}>
            <TopNavigationPanel/>
            <ScrollView contentContainerStyle={styles.mainContainer}>
                <View style={styles.productContainer}>
                    <Image style={styles.productImage} source={productInfo.image} />
                </View>
                <Text style={styles.categoryText}>{productInfo.category}</Text>
                <Text style={styles.nameProductText}>{productInfo.name}</Text>
                <View style={styles.sizeProductContainer}>
                    <Text style={styles.sizeProductText}>{productInfo.size}</Text>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.sizeProductText}>Opis</Text>
                    <Text style={{color: '#411c5d', marginTop: 3}}>{productInfo.description}</Text>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.addProductButton}>
                <Image style={styles.shopingCartImage} source={require('../../../../assets/Images/Menu/ShopingAddCartIcon.png')} />
                <Text style={styles.addProductText}>{productInfo.price} zł</Text>
            </TouchableOpacity>
        </View>
    )
}