import { View, TextInput } from 'react-native';
import React from 'react';
import { styles } from '../Styles/AccountScreenStyle';

export default function AccountSettingInput(props) {
    const { text, secure = false } = props;

  return (
    <View style={styles.inputBackground}>
        <TextInput style={styles.input} secureTextEntry={secure}>{text}</TextInput>
    </View>
  )
}