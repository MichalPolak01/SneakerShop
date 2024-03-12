import { View, TextInput } from 'react-native'
import React from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from '../Styles/loginFormInputStyles';
import Animated, { FadeInUp } from 'react-native-reanimated';

export default function LoginFormInput(props) {
  const {iconName, iconSize, text} = props;
  return (
    <Animated.View entering={FadeInUp.duration(1000).springify().randomDelay()} style={styles.inputBox}>
         <Ionicons name={iconName} size={iconSize} color= '#fff' style={styles.inputIcon} />
         <TextInput placeholder={text} placeholderTextColor={'#fff'} style={styles.inputText}></TextInput>
    </Animated.View>
  )
}