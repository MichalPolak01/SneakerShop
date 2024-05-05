import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { styles } from '../Styles/AddProductStyle';
import TopNavigationPanel from '../../Navigation/Panels/Top/TopNavigationCleanPanel';
import BottomNavigationPanel from '../../Navigation/Panels/Bottom/BottomNavigationWorkerPanel';

export default function AddProductScreen() {
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [photo, setPhoto] = useState('');
    const [description, setDescription] = useState('');

    const selectPhoto = () => {
        launchImageLibrary({}, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                setPhoto(response.uri);
            }
        });
    };

    return (
        <View style={styles.body}> 
            <TopNavigationPanel/>
            <KeyboardAvoidingView behavior='height' style={styles.keyboardBox} keyboardVerticalOffset={20}>
                <ScrollView contentContainerStyle={styles.mainContainer}>
                    <Text style={styles.titleText}>Add product</Text>
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
                    <TouchableOpacity style={styles.inputContainer} onPress={selectPhoto}>
                        <TextInput
                            style={styles.inputText}
                            value={photo}
                            placeholder="Photo"
                            placeholderTextColor={styles.placeholder.color}
                            editable={false}
                        />
                    </TouchableOpacity>
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
            
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity></ScrollView>
            </KeyboardAvoidingView>
            <BottomNavigationPanel/>
        </View>
    )
}
