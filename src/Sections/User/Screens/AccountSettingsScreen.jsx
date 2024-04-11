import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { styles } from '../Styles/AccountSettingsStyle';
import TopNavigationCleanPanel from '../../Navigation/Panels/Top/TopNavigationCleanPanel';
import BottomNavigationUserPanel from '../../Navigation/Panels/Bottom/BottomNavigationUserPanel';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function AccountSettingsScreen() {
    const navigation = useNavigation();

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
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')} >
                        <Text style={styles.buttonText}>Wyloguj</Text>
                        <Ionicons name={'chevron-forward-outline'} size={35} color= {'#fff'} style={styles.IconsSize} />
                    </TouchableOpacity>                    
                </View>
            </View>
            <BottomNavigationUserPanel />
        </View>
    );
}