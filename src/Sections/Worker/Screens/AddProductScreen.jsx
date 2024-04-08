import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../Styles/AddProductStyle';
import TopNavigationPanel from '../../Navigation/Panels/TopNavigationPanel';
import BottomNavigationPanel from '../../Navigation/Panels/BottomNavigationPanel';
;

export default function AddProductScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.body}> 
        <TopNavigationPanel/>
        
            <Text style={styles.titleText}>
                Add product
            </Text>
            <ScrollView contentContainerStyle={styles.mainContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputText}>Name</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputText}>Brand</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputText}>Category</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputText}>Price</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputText}>Photo</Text>
                </View>
                <View style={{...styles.inputContainer, height: 100}}>
                    <Text style={styles.inputText}>Description</Text>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
        <BottomNavigationPanel/>
        </View>
    )
}

