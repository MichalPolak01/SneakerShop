import { View, TextInput } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from '../Styles/loginFormInputStyles';
import Animated, { FadeInUp } from 'react-native-reanimated';

export default function LoginFormInput(props) {
  const {iconName, iconSize, text, value, color, handleOnChange, secue = false} = props;
  return (
    <Animated.View entering={FadeInUp.duration(1000).springify().randomDelay()} style={styles.inputBox}>
         <Ionicons name={iconName} size={iconSize} color= {color? 'red' : '#fff'} style={styles.inputIcon} />
         <TextInput secureTextEntry={secue} value={value} onChangeText={handleOnChange} placeholder={text} placeholderTextColor={color? 'red' : '#fff'} style={[styles.inputText, color? styles.markText : null]}></TextInput>
    </Animated.View>
  )
}