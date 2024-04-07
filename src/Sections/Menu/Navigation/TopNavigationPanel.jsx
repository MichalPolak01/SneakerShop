// TopNavigationPanel.js
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'; 
import { styles } from '../Styles/TopNavigationPanel';

export default function TopNavigationPanel() {
    const navigation = useNavigation(); 
    const route = useRoute();

    const isMainMenu = route.name === 'MainMenu';
    const isProductScreen = route.name === 'Product';

    return (
        <View style={styles.body}>
            <View style={styles.mainContainer}>
                {isMainMenu && (
                    <>
                        <TouchableOpacity>
                            <Text style={styles.navigateText}>Sortuj</Text>
                        </TouchableOpacity>

                        <Image style={styles.nameImage} source={require('../../../../assets/Images/Login/Name.png')} />
                        
                        <TouchableOpacity>
                            <Text style={styles.navigateText}>Filtruj</Text>
                        </TouchableOpacity>
                    </>
                )}

                {isProductScreen && (
                    <>
                        <TouchableOpacity onPress={() => navigation.navigate('MainMenu')}>
                            <Image style={styles.iconsSize} source={require('../../../../assets/Images/Menu/ArrowIcon.png')} />
                        </TouchableOpacity>

                        <Image style={styles.nameImage} source={require('../../../../assets/Images/Login/Name.png')} />
                        
                        <TouchableOpacity>
                            <Image style={styles.iconsSize} source={require('../../../../assets/Images/Menu/ShopingCartIcon.png')} />
                        </TouchableOpacity>
                    </>
                )}
            </View>
            <View style={styles.bottomBorder}></View>
        </View>
    );
}
