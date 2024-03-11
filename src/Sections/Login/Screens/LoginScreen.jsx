import { View, Text, Image, TextInput, TouchableOpacity, SafeAreaView, ScrollView, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

import { styles } from '../Styles/loginStyles'

export default function LoginScreen() {
  return (
    <SafeAreaView scrollEnabled={false} style={styles.body}>
        <Image style={styles.background} source={require('../../../../assets/Images/Login/LoginBackground.png')} />

        <View style={styles.header}>
        <Image style={[styles.name]} source={require('../../../../assets/Images/Login/Name.png')} />    
            <View style={styles.iconBox}>
                <Image style={[styles.icon, styles.icon1]} source={require('../../../../assets/Images/Login/Icon.png')} />
                <Image style={[styles.icon, styles.icon2]} source={require('../../../../assets/Images/Login/Icon.png')} /> 
            </View>
            
            <Text style={styles.title}>Login</Text>
        </View>

        <KeyboardAvoidingView behavior='padding' style={styles.form}>
            <View style={styles.inputBox}>
                <Ionicons name="mail-outline" size={30} color= '#fff' style={styles.inputIcon} />
                <TextInput placeholder='E-mail' placeholderTextColor={'#fff'} style={styles.inputText}></TextInput>
            </View>
            <View style={styles.inputBox}>
                <Ionicons name="lock-closed-outline" size={25} color= '#fff' />
                <TextInput placeholder='Passworld' placeholderTextColor={'#fff'} style={styles.inputText}></TextInput>
            </View>
            <View style={styles.buttonBox}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.signUp}>
                <Text style={styles.signUpText} >Don't have an account? </Text>
                <TouchableOpacity>
                    <Text style={styles.signUpLink}>SignUp</Text>
                </TouchableOpacity>
            </View>
            
            
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}