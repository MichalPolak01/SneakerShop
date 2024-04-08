import React from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../Styles/BottomNavigationPanel';

export default function BottomNavigationPanel() {
    const navigation = useNavigation();

    return (
        <View style={styles.body}>
            <View style={styles.mainContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('MainMenu')}>
                    <Image style={styles.IconsSize} source={require('../../../../assets/Images/Menu/HomeIcon.png')} />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.navigate('ShoppingCart')}>
                    <Image style={styles.IconsSize} source={require('../../../../assets/Images/Menu/ShopingCartMenuIcon.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Image style={styles.IconsSize} source={require('../../../../assets/Images/Menu/PersonIcon.png')} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
