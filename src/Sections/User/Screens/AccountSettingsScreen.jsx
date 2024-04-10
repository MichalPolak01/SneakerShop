import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, ToastAndroid, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { styles } from '../Styles/AccountScreenStyle';
import TopNavigationAccountSettings from '../../Navigation/Panels/Top/TopNavigationAccountSettings';
import BottomNavigationUserPanel from '../../Navigation/Panels/Bottom/BottomNavigationUserPanel';
import AccountSettingInput from '../Models/AccountSettingInput';

export default function AccountSettingsScreen() {
    const navigation = useNavigation();

    const [account, setAccount] = useState({
        name: 'Jan',
        surname: 'Kowalski',
        phone: '123456789',
        email: 'jan@o2.com',
        password: 'jan123',
        rePassword: 'jan123',
        street: 'Konwaliowa',
        streetSecondLine: '25A',
        city: 'Tarnów',
        postalCode: '33-100',
        country: 'Poland'
    });

    // const [account, setAccount] = useState({
    //     name: '',
    //     surname: '',
    //     phone: '',
    //     email: '',
    //     password: '',
    //     rePassword: '',
    //     street: '',
    //     streetSecondLine: '',
    //     city: '',
    //     postalCode: '',
    //     country: ''
    // });

    const [errorMessage, setErrorMessage] = useState ({
        name: '',
        surname: '',
        phone: '',
        email: '',
        password: '',
        rePassword: '',
        street: '',
        streetSecondLine: '',
        city: '',
        postalCode: '',
        country: ''
    });
    
    const validate = async () => {
        let errorMessages = {...errorMessage};

        if (account.name.trim() === '') {
            errorMessages.name = 'First name is required!';
        } else {
            errorMessages.name = '';
        }
        if (account.surname.trim() === '') {
            errorMessages.surname = 'Last name is required!';
        } else {
            errorMessages.surname = '';
        }
        if (account.phone.trim() === '') {
            errorMessages.phone = 'Phone number is required!';
        } else if (!isValidPhone(account.phone)) {
            errorMessages.phone = 'Invalid phone number!';
        } else {
            errorMessages.phone = '';
        }
        if (account.email.trim() === '') {
            errorMessages.email = 'Email address is required!';
        } else if (!isValidEmail(account.email)) {
            errorMessages.email = 'Invalid email address!';
        } else if (isEmailUsed(account.email)) {
            errorMessages.email = 'Account with this email address already exist!';
        } else {
            errorMessages.email = '';
        }
        if (account.password.trim() === '') {
            errorMessages.password = 'Password is required!';
        } else if (!isStrongPassword(account.password)) {
            errorMessages.password = 'Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, and one number!';
        } else {
            errorMessages.password = '';
        }
        if (account.rePassword.trim() === '') {
            errorMessages.rePassword = 'Re-password is required!';
        } else if (account.password !== account.rePassword) {
            errorMessages.rePassword = 'Passwords must be the same!';
        } else {
            errorMessages.rePassword = '';
        }
        if (account.street.trim() === '') {
            errorMessages.street = 'Street address is required!';
        } else {
            errorMessages.street = '';
        }
        if (account.streetSecondLine.trim() === '') {
            errorMessages.streetSecondLine = 'Street address is required!';
        } else {
            errorMessages.streetSecondLine = '';
        }
        if (account.city.trim() === '') {
            errorMessages.city = 'City is required!';
        } else {
            errorMessages.city = '';
        }
        if (account.postalCode.trim() === '') {
            errorMessages.postalCode = 'Postal code is required!';
        } else if (!isValidPostalCode(account.postalCode)) {
            errorMessages.postalCode = 'Invalid postal code!';
        } else {
            errorMessages.postalCode = '';
        }
        if (account.country.trim() === '') {
            errorMessages.country = 'Country is required!';
        } else {
            errorMessages.country = '';
        }

        setErrorMessage(errorMessages);
        return errorMessages;
    };

    const isValidPhone = (phone) => {
        const nineDigitsRegex = /^\d{9}$/;
        const plusElevenDigitsRegex = /^\+\d{11}$/;
    
        return nineDigitsRegex.test(phone) || plusElevenDigitsRegex.test(phone) ;
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isEmailUsed = (email) => {
        /* TO DO CHECK EMAIL IN DATABASE */
        return false;
    }

    const isStrongPassword = (password) => {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
    }

    const isValidPostalCode = (postalCode) => {
        const postalCodeRegex = /^[0-9]{2}-?[0-9]{3}$/;
    
        return postalCodeRegex.test(postalCode);
    };

    const handleUpdate = async () => {
        console.log(account);   /* DO USUNIĘCIA */
       
        const errorMessages = await validate();

        if (Object.values(errorMessages).some(value => value !== '')) {
            ToastAndroid.showWithGravity('Wrong Input Data!', ToastAndroid.SHORT, ToastAndroid.CENTER);
            return;
        }

        /* TO DO UPDATE */
    }

    const handleChange = (name, value) => {
        /* Phone check */
        if ( name === 'phone' && !/^\+?([0-9]*)$/.test(value)) {
            return;
        }

        /* Postal code check */
        if (name === 'postalCode' && !/^(\d{0,2}-?\d{0,3})?$/.test(value)) {
            return;
        }

        setAccount(prevAccount => ({
            ...prevAccount,
            [name]: value
        }));
    };

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
                        <AccountSettingInput text='Name' value={account.name} handleOnChange={(value) => handleChange('name', value)} errorMessage={errorMessage.name}/>
                        <AccountSettingInput text='Surname' value={account.surname} handleOnChange={(value) => handleChange('surname', value)} errorMessage={errorMessage.surname} />
                        <AccountSettingInput text='Phone' value={account.phone} handleOnChange={(value) => handleChange('phone', value)} errorMessage={errorMessage.phone} />
                        <AccountSettingInput text='E-mail' value={account.email} handleOnChange={(value) => handleChange('email', value)} errorMessage={errorMessage.email} />
                        <AccountSettingInput text='Password' value={account.password} secue={true} handleOnChange={(value) => handleChange('password', value)} errorMessage={errorMessage.password} />
                        <AccountSettingInput text='Re-password' value={account.rePassword} secue={true} handleOnChange={(value) => handleChange('rePassword', value)} errorMessage={errorMessage.rePassword} />
                        <AccountSettingInput text='Street Address' value={account.street} handleOnChange={(value) => handleChange('street', value)} errorMessage={errorMessage.street} />
                        <AccountSettingInput text='Street Address Line 2' value={account.streetSecondLine} handleOnChange={(value) => handleChange('streetSecondLine', value)} errorMessage={errorMessage.streetSecondLine} />
                        <AccountSettingInput text='City' value={account.city} handleOnChange={(value) => handleChange('city', value)} errorMessage={errorMessage.city} />
                        <AccountSettingInput text='Postal / Zpi Code' value={account.postalCode} handleOnChange={(value) => handleChange('postalCode', value)} errorMessage={errorMessage.postalCode} />
                        <AccountSettingInput text='Country' value={account.country} handleOnChange={(value) => handleChange('country', value)} errorMessage={errorMessage.country} />

                        <TouchableOpacity style={styles.button} onPress={() => handleUpdate()}>
                            <Text style={styles.title}>Update</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
            <BottomNavigationUserPanel />
        </View>
    );
}