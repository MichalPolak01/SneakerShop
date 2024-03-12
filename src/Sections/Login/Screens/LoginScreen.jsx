import React from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, ScrollView } from 'react-native'
import LoginFormInput from '../Components/LoginFormInput';
import { styles } from '../Styles/loginStyles'
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeInUp, RotateInDownLeft, useAnimatedStyle} from 'react-native-reanimated';


export default function LoginScreen() {
    const navigation = useNavigation();
    const animatedStyle = useAnimatedStyle(() => {
        return {
          transform: [{ rotateZ: `-30deg` }],
        };
    });

    return (
        <ScrollView style={styles.body}>
            <Image style={styles.background} source={require('../../../../assets/Images/Login/LoginBack.png')} />

            <View style={styles.header}>
            <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify().damping(3)} style={[styles.logo]} source={require('../../../../assets/Images/Login/Name.png')} />    
                <View style={styles.iconBox}>
                    <Animated.View style={{transform: [{ rotateZ: '-30deg' }]}}>
                       <Animated.Image entering={RotateInDownLeft.delay(200).duration(1000).springify().damping(3)} style={[styles.icon, styles.icon1]} source={require('../../../../assets/Images/Login/Icon.png')} /> 
                    </Animated.View>
                    <Animated.View style={{transform: [{ rotateZ: '30deg' },{ rotateY: '-180deg' }]}}>
                        <Animated.Image entering={RotateInDownLeft.delay(200).duration(1000).springify().damping(3)} style={[styles.icon, styles.icon2]} source={require('../../../../assets/Images/Login/Icon.png')} />
                    </Animated.View>
                </View>
                <Animated.Text entering={FadeInUp.duration(1000).springify()} style={styles.title}>Login</Animated.Text>
            </View>

            <KeyboardAvoidingView behavior='height' keyboardVerticalOffset={-100} style={styles.form}>
                <LoginFormInput iconName='mail-outline' iconSize={30} text='E-mail' />
                <LoginFormInput iconName='lock-closed-outline' iconSize={30} text='Password' />
                <Animated.View entering={FadeInUp.duration(1000).springify().randomDelay()} style={styles.buttonBox}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </Animated.View>
                
                <Animated.View entering={FadeInUp.duration(1000).springify().randomDelay()} style={styles.signUp}>
                    <Text style={styles.signUpText} >Don't have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.push('SignUp')}>
                        <Text style={styles.signUpLink}>SignUp</Text>
                    </TouchableOpacity>
                </Animated.View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}