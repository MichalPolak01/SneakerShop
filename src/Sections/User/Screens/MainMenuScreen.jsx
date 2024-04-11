import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { styles } from '../Styles/MainMenuScreenStyle';
import TopNavigationPanel from '../../Navigation/Panels/Top/TopNavigationMenuPanel';
import BottomNavigationPanel from '../../Navigation/Panels/Bottom/BottomNavigationUserPanel';
import { ProductsList } from '../Models/Product';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function MainMenuScreen() {
    const [showFilter, setShowFilter] = useState(false);
    const [showSort, setShowSort] = useState(false);
    const [sortType, setSortType] = useState('default');

    const toggleFilter = () => {
        setShowFilter(!showFilter);
    };

    const toggleSort = () => {
        setShowSort(!showSort);
    };

    const sortPriceAscending = () => {
        ProductsList.sort((a, b) => a.price - b.price);
    }

    const sortPriceDecreasing = () => {
        ProductsList.sort((a, b) => b.price - a.price);
    }

    const sortDefault = () => {
        ProductsList.sort((a, b) => a.id - b.id);
    }

    const sortNewest = () => {
        ProductsList.sort((a, b) => b.id - a.id);
    }

    useEffect(() => {
        console.log(sortType);
        if (sortType === 'priceAscending') {
            sortPriceAscending();
        }
        if (sortType === 'priceDescending') {
            sortPriceDecreasing();
        }
        if (sortType === 'default') {
            sortDefault();
        }
        if (sortType === 'newest') {
            sortNewest();
        }
    }, [sortType]);

    return (
        <View style={styles.body}>
            <TopNavigationPanel onPressFilter={toggleFilter} onPressSort={toggleSort} />             
            { showSort && 
                <SortContent setSortType={setSortType} sortType={sortType} toggleSort={toggleSort} />
            }
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


function SortContent({setSortType, sortType, toggleSort}) {
  return (
    <View style={styles.sortContent}>
      <Text style={styles.sortTitle}>Sortuj według</Text>
      <TouchableOpacity style={[styles.sortButton, , sortType === 'priceAscending'&& styles.sortButtonChoosen]} onPress={async () => {await setSortType('priceAscending'); toggleSort()}}>
            <Text style={[styles.sortButtonText, sortType === 'priceAscending' && styles.sortButtonTextChoosen]}>Cena rosnąco</Text>
            {sortType === 'priceAscending' && <Ionicons name={'checkmark-outline'} size={30} color= {'#411c5d'} style={styles.IconsSize} />}
      </TouchableOpacity>
      <TouchableOpacity style={[styles.sortButton, , sortType === 'priceDescending'&& styles.sortButtonChoosen]} onPress={async () => {await setSortType('priceDescending'); toggleSort()}}>
            <Text style={[styles.sortButtonText, sortType === 'priceDescending' && styles.sortButtonTextChoosen]}>Cena malejąco</Text>
            {sortType === 'priceDescending' && <Ionicons name={'checkmark-outline'} size={30} color= {'#411c5d'} style={styles.IconsSize} />}
      </TouchableOpacity>
        <TouchableOpacity style={[styles.sortButton, , sortType === 'newest'&& styles.sortButtonChoosen]} onPress={async () => {await setSortType('newest'), toggleSort()}}>
            <Text style={[styles.sortButtonText, sortType === 'newest' && styles.sortButtonTextChoosen]}>Najnowsze</Text>
            {sortType === 'newest' && <Ionicons name={'checkmark-outline'} size={30} color= {'#411c5d'} style={styles.IconsSize} />}
      </TouchableOpacity>
      <TouchableOpacity style={[styles.sortButton, , sortType === 'default'&& styles.sortButtonChoosen]} onPress={async () => {await setSortType('default'); toggleSort()}}>
            <Text style={[styles.sortButtonText, sortType === 'default' && styles.sortButtonTextChoosen]}>Domyślnie</Text>
            {sortType === 'default' && <Ionicons name={'checkmark-outline'} size={30} color= {'#411c5d'} style={styles.IconsSize} />}
      </TouchableOpacity>
    </View>
  )
}