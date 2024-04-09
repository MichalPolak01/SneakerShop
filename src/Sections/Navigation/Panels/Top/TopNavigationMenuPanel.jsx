import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from '../../Styles/TopNavigationPanel';

export default function TopNavigationPanel({ onPressFilter }) {

    return (
        <View style={styles.body}>
            <View style={styles.mainContainer}>
                <TouchableOpacity>
                    <Text style={styles.navigateText}>Sortuj</Text>
                </TouchableOpacity>

                <Image style={styles.nameImage} source={require('../../../../../assets/Images/Login/Name.png')} />
                
                <TouchableOpacity onPress={onPressFilter}>
                    <Text style={styles.navigateText}>Filtruj</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomBorder}></View>
        </View>
    );
}
