import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { styles } from '../../Styles/TopNavigationPanel';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TopNavigationAccountSettings() {
    const navigation = useNavigation(); 

    return (
        <View style={styles.body}>
            <View style={styles.mainContainer}>
                <View style={styles.box}></View>
                
                <Image style={styles.nameImage} source={require('../../../../../assets/Images/Login/Name.png')} />
                
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.box}>
                    <Ionicons name={'log-out-outline'} size={40} color= {'#411c5d'} style={styles.IconsSize} />
                </TouchableOpacity>
            </View>
            <View style={styles.bottomBorder}></View>
        </View>
    );
}
