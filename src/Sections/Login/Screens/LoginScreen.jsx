import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, ScrollView, ToastAndroid } from 'react-native'
import LoginFormInput from '../Components/LoginFormInput';
import { styles } from '../Styles/loginStyles'
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeInUp, RotateInDownLeft } from 'react-native-reanimated';

export default function LoginScreen() {
    const navigation = useNavigation();
    const [errors, setErrors] = useState({});

    const [login, setLogin] = useState({
        email: '',
        password: ''
    });

    const [markError, setMarkError] = useState({
        email: false,
        password: false
    });

    const validation = () => {
        let newErrors = [];
        let errorsMarks = {...markError};

        if (login.email.trim() === '') {
            newErrors.push('Email address is required!');
            errorsMarks.email = true;
        } else if (!isEmailAvailable(login.email)) {
            newErrors.push('Account with given email address doesn\'t exist!');
            errorsMarks.email = true;
        } else {
            errorsMarks.email = false;
        }
        if (login.password.trim() === '') {
            newErrors.push('Password is required!');
            errorsMarks.password = true;
        } else {
            errorsMarks.password = false;
        }

        setMarkError(errorsMarks);
        return newErrors;
    }

    const isEmailAvailable = (email) => {
        /* TO DO CHECK EMAIL IN DATABASE */
        return true;
    }

    const handleLogin = () => {
        console.log(login);

        const newErrors = validation();
        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            newErrors.forEach(error => {
                // console.log(error);
                ToastAndroid.showWithGravity(error, ToastAndroid.SHORT, ToastAndroid.CENTER);
            });
            return;
        }

        /* TO DO LOGIN */
        // handleChangeRoute();
    }

    const handleChange = (name, value) => {
        setLogin(prevLogin => ({
            ...prevLogin,
            [name]: value
        }));
    };

    return (
        <ScrollView style={styles.body}>
            <Image style={styles.background} source={require('../../../../assets/Images/Login/LoginBack.png')} />

            <View style={styles.header}>
            <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify().damping(3)} style={[styles.logo]} source={require('../../../../assets/Images/Login/Name.png')} />    
                <View style={styles.iconBox}>
                    <Animated.View style={{transform: [{ rotateZ: '-30deg' }]}}>
                       <Animated.Image entering={RotateInDownLeft.delay(200).duration(1000).springify().damping(3)} style={styles.icon} source={require('../../../../assets/Images/Login/Icon.png')} /> 
                    </Animated.View>
                    <Animated.View style={{transform: [{ rotateZ: '30deg' },{ rotateY: '-180deg' }]}}>
                        <Animated.Image entering={RotateInDownLeft.delay(200).duration(1000).springify().damping(3)} style={styles.icon} source={require('../../../../assets/Images/Login/Icon.png')} />
                    </Animated.View>
                </View>
                <Animated.Text entering={FadeInUp.duration(1000).springify()} style={styles.title}>Login</Animated.Text>
            </View>

            <KeyboardAvoidingView behavior='height' keyboardVerticalOffset={-100} style={styles.form}>
                <LoginFormInput iconName='mail-outline' iconSize={30} text='E-mail' value={login.email} color={markError.email} handleOnChange={(value) => handleChange('email', value)}/>
                <LoginFormInput iconName='lock-closed-outline' iconSize={30} text='Password' value={login.password} color={markError.password} secue={true} handleOnChange={(value) => handleChange('password', value)}/>
                
                <Animated.View entering={FadeInUp.duration(1000).springify().randomDelay()} style={styles.buttonBox}>
                    <TouchableOpacity onPress={() => handleLogin()} style={styles.button}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </Animated.View>
                
                <Animated.View entering={FadeInUp.duration(1000).springify().randomDelay()} style={styles.signUp}>
                    <Text style={styles.signUpText} >Don't have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={styles.signUpLink}>SignUp</Text>
                    </TouchableOpacity>
                </Animated.View>

                {/* Developer login  */}
                <View style={{ display: "flex", alignItems: "center", backgroundColor: "#411c5d", width: 300, borderRadius: 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('MainMenu')}>
                        <Text style={[styles.buttonText, {textAlign: 'center'}]}>User</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('AddProduct')}>
                        <Text style={[styles.buttonText, {textAlign: 'center'}]}>Worker</Text>
                    </TouchableOpacity>
                </View>


            </KeyboardAvoidingView>
        </ScrollView>
    )
}