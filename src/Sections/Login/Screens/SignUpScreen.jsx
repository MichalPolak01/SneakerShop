import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, ToastAndroid } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginFormInput from '../Components/LoginFormInput';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../Styles/signUpStyles';
import Animated, { FadeInUp, RotateInDownLeft } from 'react-native-reanimated';


export default function SignUpScreen() {
    const navigation = useNavigation();
    const [errors, setErrors] = useState({});
    const [personalDataForm, setPersonalDataForm] = useState(true);
    // const [showAlert, setShowAlert] = useState(false);
    
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
    
    const [markError, setMarkError] = useState ({
        name: false,
        surname: false,
        phone: false,
        email: false,
        password: false,
        rePassword: false,
        street: false,
        streetSecondLine: false,
        city: false,
        postalCode: false,
        country: false
    });
    
    const validatePersonalData = () => {
        let newErrors = [];
        let errorsMarks = {...markError};

        if (account.name.trim() === '') {
            newErrors.push('First name is required!');
            errorsMarks.name = true;
        } else {
            errorsMarks.name = false;
        }
        if (account.surname.trim() === '') {
            newErrors.push('Last name is required!');
            errorsMarks.surname = true;
        } else {
            errorsMarks.surname = false;
        }
        if (account.phone.trim() === '') {
            newErrors.push('Phone number is required!');
            errorsMarks.phone = true;
        } else if (!isValidPhone(account.phone)) {
            newErrors.push('Invalid phone number!');
            errorsMarks.phone = true;
        } else {
            errorsMarks.phone = false;
        }
        if (account.email.trim() === '') {
            newErrors.push('Email address is required!');
            errorsMarks.email = true;
        } else if (!isValidEmail(account.email)) {
            newErrors.push('Invalid email address!');
            errorsMarks.email = true;
        } else if (isEmailUsed(account.email)) {
            newErrors.push('Account with this email address already exist!');
            errorsMarks.email = true;
        } else {
            errorsMarks.email = false;
        }
        if (account.password.trim() === '') {
            newErrors.push('Password is required!');
            errorsMarks.password = true;
        } else if (!isStrongPassword(account.password)) {
            newErrors.push('Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, and one number!');
            errorsMarks.password = true;
        } else {
            errorsMarks.password = false;
        }
        if (account.rePassword.trim() === '') {
            newErrors.push('Re-password is required!');
            errorsMarks.rePassword = true;
        } else if (account.password !== account.rePassword) {
            newErrors.push('Passwords must be the same!');
            errorsMarks.rePassword = true;
        } else {
            errorsMarks.rePassword = false;
        }

        setMarkError(errorsMarks);
        return newErrors;
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

    const validateDeliveryData = () => {
        let newErrors = [];
        let errorsMarks = {...markError};

        if (account.street.trim() === '') {
            newErrors.push('Street address is required!');
            errorsMarks.street = true;
        } else {
            errorsMarks.street = false;
        }
        if (account.streetSecondLine.trim() === '') {
            newErrors.push('Street address is required!');
            errorsMarks.streetSecondLine = true;
        } else {
            errorsMarks.streetSecondLine = false;
        }
        if (account.city.trim() === '') {
            newErrors.push('City is required!');
            errorsMarks.city = true;
        } else {
            errorsMarks.city = false;
        }
        if (account.postalCode.trim() === '') {
            newErrors.push('Postal code is required!');
            errorsMarks.postalCode = true;
        } else if (!isValidPostalCode(account.postalCode)) {
            newErrors.push('Invalid postal code!');
            errorsMarks.postalCode = true;
        } else {
            errorsMarks.postalCode = false;
        }
        if (account.country.trim() === '') {
            newErrors.push('Country is required!');
            errorsMarks.country = true;
        } else {
            errorsMarks.country = false;
        }

        setMarkError(errorsMarks);
        return newErrors;
    }

    const isValidPostalCode = (postalCode) => {
        const postalCodeRegex = /^[0-9]{2}-?[0-9]{3}$/;
    
        return postalCodeRegex.test(postalCode);
    };

    const handleCheckPersonalData = () => {
        console.log(account);

        const newErrors = validatePersonalData();
        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            newErrors.forEach(error => {
                // console.log(error);
                ToastAndroid.showWithGravity(error, ToastAndroid.SHORT, ToastAndroid.CENTER);
            });
            return;
        }
        setPersonalDataForm(false);
    }

    const handleRegister = () => {
        console.log(account);

        const newErrors = validatePersonalData().concat(validateDeliveryData());
        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            newErrors.forEach(error => {
                // console.log(error);
                ToastAndroid.showWithGravity(error, ToastAndroid.SHORT, ToastAndroid.CENTER);
            });
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


            <KeyboardAvoidingView behavior='height' keyboardVerticalOffset={-300} style={styles.form}>
                { personalDataForm ? 
                    <>
                        <LoginFormInput iconName='person-outline' iconSize={30} text='Name' value={account.name} color={markError.name} handleOnChange={(value) => handleChange('name', value)} />
                        <LoginFormInput iconName='person-outline' iconSize={30} text='Surname' value={account.surname} color={markError.surname} handleOnChange={(value) => handleChange('surname', value)} />
                        <LoginFormInput iconName='call-outline' iconSize={30} text='Phone' value={account.phone} color={markError.phone} handleOnChange={(value) => handleChange('phone', value)} />
                        <LoginFormInput iconName='mail-outline' iconSize={30} text='E-mail' value={account.email} color={markError.email} handleOnChange={(value) => handleChange('email', value)} />
                        <LoginFormInput iconName='lock-closed-outline' iconSize={30} text='Password' value={account.password} color={markError.password} secue={true} handleOnChange={(value) => handleChange('password', value)} />
                        <LoginFormInput iconName='lock-closed-outline' iconSize={30} text='Re-password' value={account.rePassword} color={markError.rePassword} secue={true} handleOnChange={(value) => handleChange('rePassword', value)} />

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
                            <LoginFormInput iconName='navigate-outline' iconSize={30} text='Street Address' value={account.street} color={markError.street} handleOnChange={(value) => handleChange('street', value)} />
                            <LoginFormInput iconName='locate-outline' iconSize={30} text='Street Address Line 2' value={account.streetSecondLine} color={markError.streetSecondLine} handleOnChange={(value) => handleChange('streetSecondLine', value)} />
                            <LoginFormInput iconName='navigate-outline' iconSize={30} text='City' value={account.city} color={markError.city} handleOnChange={(value) => handleChange('city', value)} />
                            <LoginFormInput iconName='locate-outline' iconSize={30} text='Postal / Zpi Code' value={account.postalCode} color={markError.postalCode} handleOnChange={(value) => handleChange('postalCode', value)} />
                            <LoginFormInput iconName='navigate-outline' iconSize={30} text='Country' value={account.country} color={markError.country} handleOnChange={(value) => handleChange('country', value)} />
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