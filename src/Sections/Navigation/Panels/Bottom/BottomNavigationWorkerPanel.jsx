import React from 'react';
import { View, TouchableOpacity,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { styles } from '../../Styles/BottomNavigationPanel';

export default function BottomNavigationWorkerPanel() {
    const navigation = useNavigation();

    return (
        <View style={styles.body}>
            <View style={styles.mainContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('AddProduct')}>
                    <Image style={styles.IconsSize} source={require('../../../../../assets/Images/Worker/AddProductIcon.png')} />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.navigate('ProductManagement')}>
                    <Image style={styles.IconsSize} source={require('../../../../../assets/Images/Worker/EditProductIcon.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('OrderApproval')}>
                    <Image style={styles.IconsSize} source={require('../../../../../assets/Images/Worker/OrderApprovalIcon.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Image style={styles.IconsSize} source={require('../../../../../assets/Images/Menu/PersonIcon.png')} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
