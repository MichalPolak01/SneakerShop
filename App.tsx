import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginSection from './src/Sections/Login/LoginSection';
import { Onboarding } from './src/Sections/Onboarding/Onboarding';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from './src/Sections/Onboarding/Styles/onboardingStyles';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [viewOnboarding, setViewOnboarding] = useState(false);

  const [refresh, setRefresh] = useState(false);

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewOnboarding');

      if (value !== null) {
        setViewOnboarding(true);
      }
    } catch (err){
      console.log('Error @checkOnboarding:', err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    < Loading />
    checkOnboarding();
  }, [refresh]);

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      {loading? <Loading/> : viewOnboarding ?
        <LoginSection />
      : <Onboarding setRefresh={ () => setRefresh(!refresh)} />}
    </NavigationContainer>
  );
}