import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { styles } from '../Styles/AccountScreenStyle';
import TopNavigationAccountSettings from '../../Navigation/Panels/Top/TopNavigationAccountSettings';
import BottomNavigationUserPanel from '../../Navigation/Panels/Bottom/BottomNavigationUserPanel';
import AccountSettingInput from '../Models/AccountSettingInput';
import { useKeyboard } from '@react-native-community/hooks';

export default function AccountSettingsScreen() {
    const navigation = useNavigation();
    const { keyboardShown } = useKeyboard();

    const [account, setAccount] = useState({
        name: 'Jan',
        surname: 'Kowalski',
        phone: '123 456 789',
        email: 'jan@o2.com',
        password: 'jan123',
        rePassword: 'jan123',
        street: 'Konwaliowa',
        streetSecondLine: '25A',
        city: 'Tarnów',
        postalCode: '33-100',
        country: 'Poland'
    });

    return (
        <View style={styles.body}>
            <TopNavigationAccountSettings />
            <KeyboardAvoidingView behavior='height' style={styles.form} keyboardVerticalOffset={0}>
                <ScrollView contentContainerStyle={styles.card}>
                    <View style={styles.header}>
                        <View style={styles.headerTextBox}>
                            <Text style={styles.title}>Edit Personal Information</Text>
                        </View>
                        <Image style={styles.stamp} source={require('../../../../assets/Images/User/stamp.png')}/>
                    </View>
                    <View>
                        <AccountSettingInput text={account.name} />
                        <AccountSettingInput text={account.surname} />
                        <AccountSettingInput text={account.phone} />
                        <AccountSettingInput text={account.email} />
                        <AccountSettingInput text={account.password} secure={true} />
                        <AccountSettingInput text={account.rePassword} secure={true} />
                        <AccountSettingInput text={account.street} />
                        <AccountSettingInput text={account.streetSecondLine} />
                        <AccountSettingInput text={account.city} />
                        <AccountSettingInput text={account.postalCode} />
                        <AccountSettingInput text={account.country} />

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.title}>Update</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
            <BottomNavigationUserPanel />
        </View>
    );
}