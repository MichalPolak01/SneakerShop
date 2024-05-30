import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Image, Modal, ActivityIndicator, ToastAndroid } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native'; 
import { styles } from '../Styles/AccountSettingsStyle';
import TopNavigationCleanPanel from '../../Navigation/Panels/Top/TopNavigationCleanPanel';
import BottomNavigationUserPanel from '../../Navigation/Panels/Bottom/BottomNavigationUserPanel';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Keychain from 'react-native-keychain';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AccountSettingsScreen() {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem('cart');
            await Keychain.resetGenericPassword();
            ToastAndroid.showWithGravity('Logged out successfully!', ToastAndroid.SHORT, ToastAndroid.CENTER);
            
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                })
            );
        } catch (error) {
            console.log('Failed to log out', error);
            ToastAndroid.showWithGravity('Failed to log out. Please try again!', ToastAndroid.SHORT, ToastAndroid.CENTER);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.body}>
            <TopNavigationCleanPanel />
            <View style={styles.content}>
                <View style={styles.header}>
                    <View style={styles.headerBox}>
                        <View style={styles.headerTextBox}>
                            <Text style={styles.title}>Witaj Jan</Text>  
                        </View>           
                        <View style={styles.person}>
                            <Image source={require('../../../../assets/Images/User/bambus.png')} style={styles.personImage} />
                        </View>
                    </View>
                    <Text style={styles.headerTextDescription}>Tutaj możesz zarządzać ustawieniami swojego konta oraz zamówieniami i zwrotami.</Text>
                </View>
                
                <View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChangePersonalInformation')} >
                        <Text style={styles.buttonText}>Dane osobowe</Text>
                        <Ionicons name={'chevron-forward-outline'} size={35} color= {'#fff'} style={styles.IconsSize} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChangeDeliveryInformatin')} >
                        <Text style={styles.buttonText}>Dane dotyczące dostawy</Text>
                        <Ionicons name={'chevron-forward-outline'} size={35} color= {'#fff'} style={styles.IconsSize} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChangePassword')} >
                        <Text style={styles.buttonText}>Zmiana hasła</Text>
                        <Ionicons name={'chevron-forward-outline'} size={35} color= {'#fff'} style={styles.IconsSize} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText}>Zamówienia i zwroty</Text>
                        <Ionicons name={'chevron-forward-outline'} size={35} color= {'#fff'} style={styles.IconsSize} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NewsletterSettings')} >
                        <Text style={styles.buttonText}>Ustawienia newslettera</Text>
                        <Ionicons name={'chevron-forward-outline'} size={35} color= {'#fff'} style={styles.IconsSize} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handleLogout()} >
                        <Text style={styles.buttonText}>Wyloguj</Text>
                        <Ionicons name={'chevron-forward-outline'} size={35} color= {'#fff'} style={styles.IconsSize} />
                    </TouchableOpacity>                    
                </View>
            </View>
            <BottomNavigationUserPanel />

            <Modal
                transparent={true}
                animationType={'none'}
                visible={loading}
                onRequestClose={() => {}}>
                <View style={styles.modalBackground}>
                    <ActivityIndicator size="large" color="#C3C7DF" style={{ transform: [{ scale: 1.5 }] }} />
                </View>
            </Modal>
        </View>
    );
}