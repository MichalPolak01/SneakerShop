import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, ToastAndroid } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginFormInput from '../Components/LoginFormInput';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../Styles/signUpStyles';
import Animated, { FadeInUp, RotateInDownLeft } from 'react-native-reanimated';


export default function SignUpScreen() {
    const navigation = useNavigation();
    const [personalDataForm, setPersonalDataForm] = useState(true);
    
    const [account, setAccount] = useState({
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
    
    const validatePersonalData = async () => {
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

    const validateDeliveryData = async () => {
        let errorMessages = {...errorMessage};

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
    }

    const isValidPostalCode = (postalCode) => {
        const postalCodeRegex = /^[0-9]{2}-?[0-9]{3}$/;
    
        return postalCodeRegex.test(postalCode);
    };

    const handleCheckPersonalData = async () => {
        console.log(account);   /* DO USUNIĘCIA */
       
        const errorMessages = await validatePersonalData();

        if ( errorMessages.name !== '' || errorMessages.surname !== '' || errorMessages.phone !== '' ||
            errorMessages.email !== '' || errorMessages.password !== '' || errorMessages.rePassword !== '' ) {
            ToastAndroid.showWithGravity('Wrong Input Data!', ToastAndroid.SHORT, ToastAndroid.CENTER);
            return;
        }

        setPersonalDataForm(false);
    }

    const handleRegister = async () => {
        console.log(account);   /* DO USUNIĘCIA */

        const errorMessages = await validateDeliveryData();

        if (Object.values(errorMessages).some(value => value !== '')) {
            ToastAndroid.showWithGravity('Wrong Input Data!', ToastAndroid.SHORT, ToastAndroid.CENTER);
            return;
        }

        /* TO DO REGISTER */
        handleChangeRoute();
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

    const handleChangeRoute = () => {
        navigation.navigate('Login');
    };


    return (
        <ScrollView style={styles.body}>
            <Image style={styles.background} source={require('../../../../assets/Images/Login/SignUpBackground.png')} />

            <View style={styles.header}>
                <View style={styles.iconBox}>
                <Animated.View style={{transform: [{ rotateZ: '-30deg' }]}}>
                       <Animated.Image entering={RotateInDownLeft.delay(200).duration(1000).springify().damping(3)} style={styles.icon} source={require('../../../../assets/Images/Login/Icon.png')} /> 
                    </Animated.View>
                    <Animated.View style={{transform: [{ rotateZ: '30deg' },{ rotateY: '-180deg' }]}}>
                        <Animated.Image entering={RotateInDownLeft.delay(200).duration(1000).springify().damping(3)} style={styles.icon} source={require('../../../../assets/Images/Login/Icon.png')} />
                    </Animated.View>
                </View>
                <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify().damping(3).randomDelay()} style={[styles.logo]} source={require('../../../../assets/Images/Login/Name.png')} /> 
                <Animated.Text entering={FadeInUp.duration(1000).springify().randomDelay()} style={styles.title}>{personalDataForm? 'Register' : 'Shipping details'}</Animated.Text>
            </View>

            <KeyboardAvoidingView behavior='point' style={styles.form}>
                { personalDataForm ? 
                    <>
                        <LoginFormInput iconName='person-outline' iconSize={30} text='Name' value={account.name} handleOnChange={(value) => handleChange('name', value)} errorMessage={errorMessage.name}/>
                        <LoginFormInput iconName='person-outline' iconSize={30} text='Surname' value={account.surname} handleOnChange={(value) => handleChange('surname', value)} errorMessage={errorMessage.surname} />
                        <LoginFormInput iconName='call-outline' iconSize={30} text='Phone' value={account.phone} handleOnChange={(value) => handleChange('phone', value)} errorMessage={errorMessage.phone} />
                        <LoginFormInput iconName='mail-outline' iconSize={30} text='E-mail' value={account.email} handleOnChange={(value) => handleChange('email', value)} errorMessage={errorMessage.email} />
                        <LoginFormInput iconName='lock-closed-outline' iconSize={30} text='Password' value={account.password} secue={true} handleOnChange={(value) => handleChange('password', value)} errorMessage={errorMessage.password} />
                        <LoginFormInput iconName='lock-closed-outline' iconSize={30} text='Re-password' value={account.rePassword} secue={true} handleOnChange={(value) => handleChange('rePassword', value)} errorMessage={errorMessage.rePassword} />

                        <Animated.View entering={FadeInUp.duration(1000).springify().randomDelay()} style={styles.buttonBox}>
                            
                            <TouchableOpacity style={styles.button} onPress={() => handleCheckPersonalData()}>
                                <Text style={styles.buttonText}>Continue registration</Text>
                                <Ionicons name='arrow-redo-outline' size={30} color= '#fff' /> 
                            </TouchableOpacity>
                        </Animated.View>

                        <Animated.View entering={FadeInUp.duration(1000).springify().randomDelay()} style={styles.signUp}>
                            <Text style={styles.signUpText} >Already have an account? </Text>
                            <TouchableOpacity onPress={() => navigation.push('Login')}>
                                <Text style={styles.signUpLink}>Login</Text>
                            </TouchableOpacity>
                        </Animated.View>
                    </> 
                :
                    <>
                        <>
                            <LoginFormInput iconName='navigate-outline' iconSize={30} text='Street Address' value={account.street} handleOnChange={(value) => handleChange('street', value)} errorMessage={errorMessage.street} />
                            <LoginFormInput iconName='locate-outline' iconSize={30} text='Street Address Line 2' value={account.streetSecondLine} handleOnChange={(value) => handleChange('streetSecondLine', value)} errorMessage={errorMessage.streetSecondLine} />
                            <LoginFormInput iconName='navigate-outline' iconSize={30} text='City' value={account.city} handleOnChange={(value) => handleChange('city', value)} errorMessage={errorMessage.city} />
                            <LoginFormInput iconName='locate-outline' iconSize={30} text='Postal / Zpi Code' value={account.postalCode} handleOnChange={(value) => handleChange('postalCode', value)} errorMessage={errorMessage.postalCode} />
                            <LoginFormInput iconName='navigate-outline' iconSize={30} text='Country' value={account.country} handleOnChange={(value) => handleChange('country', value)} errorMessage={errorMessage.country} />
                        </>
                        <View style={styles.buttonNext2Button}>
                            <Animated.View entering={FadeInUp.duration(1000).springify().randomDelay()} style={styles.buttonBoxSmall}>
                                <TouchableOpacity style={styles.button} onPress={() => setPersonalDataForm(!personalDataForm)}>
                                    <Ionicons name='arrow-undo-outline' size={30} color= '#fff' /> 
                                    <Text style={styles.buttonText}>Back</Text>
                                </TouchableOpacity>
                            </Animated.View>

                            <Animated.View entering={FadeInUp.duration(1000).springify().randomDelay()} style={styles.buttonBoxSmall}>
                                <TouchableOpacity style={styles.button} onPress={() => handleRegister()}>
                                    <Text style={styles.buttonText}>Register</Text>
                                    <Ionicons name='log-in-outline' size={30} color= '#fff' /> 
                                </TouchableOpacity>
                            </Animated.View>
                        </View>
                   
                        <Animated.View entering={FadeInUp.duration(1000).springify().randomDelay()} style={styles.signUp}>
                                <Text style={styles.signUpText} >Already have an account? </Text>
                                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                    <Text style={styles.signUpLink}>Login</Text>
                                </TouchableOpacity>
                        </Animated.View>
                    </>
                }
            </KeyboardAvoidingView>
        </ScrollView>
    )
}