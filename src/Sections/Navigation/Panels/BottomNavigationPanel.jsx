import React from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'; 
import { styles } from '../Styles/BottomNavigationPanel';

export default function BottomNavigationPanel() {
    const navigation = useNavigation();
    const route = useRoute();

    const isOrderApprovalScreen = route.name === 'OrderApproval';

    return (
        <View style={styles.body}>
            <View style={styles.mainContainer}>
            {isOrderApprovalScreen && (
                <>
                <TouchableOpacity>
                    <Image style={styles.IconsSize} source={require('../../../../assets/Images/Worker/AddProductIcon.png')} />
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Image style={styles.IconsSize} source={require('../../../../assets/Images/Worker/EditProductIcon.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('OrderApproval')}>
                    <Image style={styles.IconsSize} source={require('../../../../assets/Images/Worker/OrderApprovalIcon.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Image style={styles.IconsSize} source={require('../../../../assets/Images/Menu/PersonIcon.png')} />
                </TouchableOpacity>
                </>
            )} 
            
            {!isOrderApprovalScreen && ( 
                <>
                <TouchableOpacity onPress={() => navigation.navigate('MainMenu')}>
                    <Image style={styles.IconsSize} source={require('../../../../assets/Images/Menu/HomeIcon.png')} />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.navigate('ShoppingCart')}>
                    <Image style={styles.IconsSize} source={require('../../../../assets/Images/Menu/ShopingCartMenuIcon.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Image style={styles.IconsSize} source={require('../../../../assets/Images/Menu/PersonIcon.png')} />
                </TouchableOpacity>
                </>
            )}
            </View>
        </View>
    );
}
