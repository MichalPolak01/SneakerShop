import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRoute } from '@react-navigation/native';
import { styles } from '../Styles/ProductScreenStyle';
import TopNavigationPanel from '../../Navigation/Panels/Top/TopNavigationProductPanel';
import { ProductsList } from '../Models/Product';
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

export default function ProductScreen() {
    const route = useRoute();
    const { productId } = route.params;

    const [productInfo, setProductInfo] = useState({
        category: '',
        name: '',
        description: '',
        price: '',
        image: null,
        sizes: []
    });

    const [selectedSize, setSelectedSize] = useState('');

    useEffect(() => {
        const selectedProduct = ProductsList.find(product => product.id === productId);
        if (selectedProduct) {
            setProductInfo({
                category: selectedProduct.category,
                name: selectedProduct.name,
                description: selectedProduct.description,
                price: selectedProduct.price.toString(),
                image: selectedProduct.image,
                sizes: selectedProduct.sizes
            });
        }
    }, [productId]);

    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };

    return (
        <View style={styles.body}>
            <TopNavigationPanel />
            <ScrollView contentContainerStyle={styles.mainContainer}>
                <View style={styles.productContainer}>
                    <Image style={styles.productImage} source={productInfo.image ? productInfo.image : require('../../../../assets/Images/Login/Icon.png')} />
                </View>
                <Text style={styles.categoryText}>{productInfo.category}</Text>
                <Text style={styles.nameProductText}>{productInfo.name}</Text>
                <View style={styles.sizeProductContainer}>
                    <Text style={styles.sizeProductText}>Rozmiar</Text>
                    <View style={styles.SelectorContainer}>
                        <Picker
                            selectedValue={selectedSize}
                            style={styles.sizePickerContainer}
                            onValueChange={(itemValue, itemIndex) =>
                                handleSizeChange(itemValue)
                            }>
                            {productInfo.sizes.map((size, index) => (
                                <Picker.Item key={index} label={size} value={size} style={{
                                    color: selectedSize === size ? '#411c5d' : 'black', 
                                    fontWeight: selectedSize === size ? 'bold' : 'normal'
                                }}/>
                            ))}
                        </Picker>
                    </View>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.sizeProductText}>Opis</Text>
                    <Text style={{ color: '#411c5d', marginTop: 3 }}>{productInfo.description}</Text>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.addProductButton}>
                <Image style={styles.shopingCartImage} source={require('../../../../assets/Images/Menu/ShopingAddCartIcon.png')} />
                <Text style={styles.addProductText}>{productInfo.price} zł</Text>
            </TouchableOpacity>
        </View>
    );
}