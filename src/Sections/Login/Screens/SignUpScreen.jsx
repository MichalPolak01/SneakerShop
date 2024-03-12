import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native'
import LoginFormInput from '../Components/LoginFormInput';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../Styles/signUpStyles';
import Animated, { FadeInUp, RotateInDownLeft, useAnimatedStyle} from 'react-native-reanimated';


export default function SignUpScreen() {
    const navigation = useNavigation();
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
                <Animated.Text entering={FadeInUp.duration(1000).springify().randomDelay()} style={styles.title}>Register</Animated.Text>
            </View>

            <KeyboardAvoidingView behavior='height' keyboardVerticalOffset={-300} style={styles.form}>
            <LoginFormInput iconName='person-outline' iconSize={30} text='Name' />
            <LoginFormInput iconName='person-outline' iconSize={30} text='Surname' />
            <LoginFormInput iconName='call-outline' iconSize={30} text='Phone' />
            <LoginFormInput iconName='mail-outline' iconSize={30} text='E-mail' />
            <LoginFormInput iconName='lock-closed-outline' iconSize={30} text='Password' />
            <LoginFormInput iconName='lock-closed-outline' iconSize={30} text='Re-password' />

            <Animated.View entering={FadeInUp.duration(1000).springify().randomDelay()} style={styles.buttonBox}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
            </Animated.View>
            <Animated.View entering={FadeInUp.duration(1000).springify().randomDelay()} style={styles.signUp}>
                    <Text style={styles.signUpText} >Already have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.push('Login')}>
                        <Text style={styles.signUpLink}>Login</Text>
                    </TouchableOpacity>
            </Animated.View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}