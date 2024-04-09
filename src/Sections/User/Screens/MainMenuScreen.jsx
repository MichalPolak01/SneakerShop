import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { styles } from '../Styles/MainMenuScreenStyle';
import TopNavigationPanel from '../../Navigation/Panels/Top/TopNavigationMenuPanel';
import BottomNavigationPanel from '../../Navigation/Panels/Bottom/BottomNavigationUserPanel';
import { ProductsList } from '../Models/Product';

export default function MainMenuScreen() {
    const [showFilter, setShowFilter] = useState(false);

    const toggleFilter = () => {
        setShowFilter(!showFilter);
    };

    return (
        <View style={styles.body}>
            <TopNavigationPanel onPressFilter={toggleFilter} /> 
            <ScrollView contentContainerStyle={styles.mainContainer}>
                {ProductsList.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </ScrollView>
            <BottomNavigationPanel/>
            { showFilter && ( 
                <>
                    <FilterSection toggleFilter={toggleFilter} />
                </>
            )}
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

function FilterSection({ toggleFilter }) {
    return (
        <View style={styles.backgroundFilter}>
            <View style={styles.filterContainer}>
                <TouchableOpacity style={styles.closeImage} onPress={toggleFilter}>
                    <Image style={styles.closeImage} source={require('../../../../assets/Images/Menu/CloseIcon.png')} />
                </TouchableOpacity>
                <ScrollView contentContainerStyle={styles.filterContentContainer}>
                    <Text></Text>
                </ScrollView>
                <TouchableOpacity style={styles.buttonFilter} onPress={toggleFilter}>
                    <Text style={styles.textButtonFilter}>Zatwierdź</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
