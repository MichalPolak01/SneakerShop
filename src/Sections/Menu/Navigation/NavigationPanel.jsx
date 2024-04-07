import React from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import hooka do nawigacji
import { styles } from '../Styles/TopNavigationPanel';

export default function TopNavigationPanel() {
    const navigation = useNavigation(); // Inicjalizacja hooka nawigacyjnego

    return (
        <View style={styles.body}>
            <View style={styles.mainContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Image style={styles.IconsSize} source={require('../../../../assets/Images/Menu/ArrowIcon.png')} />
                </TouchableOpacity>
                <Image style={styles.nameImage} source={require('../../../../assets/Images/Login/Name.png')} />
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Image style={styles.IconsSize} source={require('../../../../assets/Images/Menu/ShopingCartIcon.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.bottomBorder}></View>
        </View>
    );
}
