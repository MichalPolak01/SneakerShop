import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../Styles/AddProductStyle';
import TopNavigationPanel from '../../Navigation/Panels/TopNavigationPanel';
import BottomNavigationPanel from '../../Navigation/Panels/BottomNavigationPanel';

export default function AddProductScreen() {
    const navigation = useNavigation();

    // Zmienne stanu do przechowywania danych wprowadzonych przez użytkownika
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [photo, setPhoto] = useState('');
    const [description, setDescription] = useState('');

    return (
        <View style={styles.body}> 
            <TopNavigationPanel/>
            <Text style={styles.titleText}>
                Add product
            </Text>
            <ScrollView contentContainerStyle={styles.mainContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputText}
                        value={name}
                        placeholder="Name"
                        placeholderTextColor={styles.placeholder.color}
                        onChangeText={setName}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputText}
                        value={brand}
                        placeholder="Brand"
                        placeholderTextColor={styles.placeholder.color}
                        onChangeText={setBrand}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputText}
                        value={category}
                        placeholder="Category"
                        placeholderTextColor={styles.placeholder.color}
                        onChangeText={setCategory}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputText}
                        value={price}
                        placeholder="Price"
                        placeholderTextColor={styles.placeholder.color}
                        onChangeText={setPrice}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputText}
                        value={photo}
                        placeholder="Photo"
                        placeholderTextColor={styles.placeholder.color}
                        onChangeText={setPhoto}
                    />
                </View>
                <View style={{...styles.inputContainer, height: 100}}>
                    <TextInput
                        style={{...styles.inputText, height: 80, marginTop: -10}}
                        multiline={true}
                        value={description}
                        placeholder="Description"
                        placeholderTextColor={styles.placeholder.color}
                        onChangeText={setDescription}
                    />
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
            <BottomNavigationPanel/>
        </View>
    )
}
