import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import TopNavigationAccountSettings from '../../Navigation/Panels/Top/TopNavigationAccountSettings';
import { styles } from '../Styles/ChangeInformationStyle';

export default function NewsletterSettingsScreen() {
    const [selectedValue, setSelectedValue] = useState('daily');

  return (
    <View style={styles.body}>
        <TopNavigationAccountSettings />
        <View style={styles.contentNewsletter}>
            <Text style={styles.titleNewsletter} >Wybierz opcję newslettera</Text>
            <CustomRadioButton label='Codzienne zestawienie promocji' selected={selectedValue === 'daily'}  onSelect={() => setSelectedValue('daily')} />
            <CustomRadioButton label='Cotygodniowy przegląd promocji' selected={selectedValue === 'weekly'} onSelect={() => setSelectedValue('weekly')} />
            <CustomRadioButton label='Zrezygnuj z otrzymywania newslettera' selected={selectedValue === 'never'} onSelect={() => setSelectedValue('never')} />
        </View>
    </View>
  )
}

const CustomRadioButton = ({label, selected, onSelect}) => (
    <TouchableOpacity onPress={onSelect} style={[styles.customRadioButton, selected ? styles.customRadioButtonSelected : styles.customRadioButtonNormal]} >
        <Text style={selected? styles.customRadioButtonTextSelected : styles.customRadioButtonText}>
            {label}
        </Text>
    </TouchableOpacity>

);