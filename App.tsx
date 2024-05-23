import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Keychain from 'react-native-keychain';
import NavigationSection from './src/Sections/Navigation/NavigationSection';
import { Onboarding } from './src/Sections/Onboarding/Onboarding';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from './src/Sections/Onboarding/Styles/onboardingStyles';
import LottieView from "lottie-react-native";
import MainMenuScreen from './src/Sections/User/Screens/MainMenuScreen';
import AddProductScreen from './src/Sections/Worker/Screens/AddProductScreen';


const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
}

const SplashScreen = () => (
  <LottieView
    source={require("./assets/SplashScreen/splash.json")}
    style={{width: 411, height: 823}}
    autoPlay
    loop = {false}
  />
);


export default function App() {
  const [loading, setLoading] = useState(true);
  const [viewOnboarding, setViewOnboarding] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  const [refresh, setRefresh] = useState(false);
  // const [userData, setUserData] = useState(null);

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewOnboarding');

      if (value !== null) {
        setViewOnboarding(true);
      }

      // try {
      //   const credentials = await Keychain.getGenericPassword();
      //   if (credentials) {
      //       setUserData(JSON.parse(credentials.password));
      //       console.log(userData.roles[0].name);
      //       // if (userData.roles[0].name === "Employee") {
      //       //   naviga
      //       // } else if (userData.roles[0].name === "User")
      //       // if (credentials.)
      //   }
      // } catch (error) {
      //     console.error('Failed to load user data', error);
      // }

    } catch (err){
      console.log('Error @checkOnboarding:', err);
    } finally {
      setLoading(false);
    }
  }

  

  // const loadUserData = async () => {
  //     try {
  //         const credentials = await Keychain.getGenericPassword();
  //         if (credentials) {
  //             setUserData(JSON.parse(credentials.password));
  //         }
  //     } catch (error) {
  //         console.error('Failed to load user data', error);
  //     } finally {
  //         setLoading(false);
  //     }
  // };

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 1700);

    checkOnboarding();
  }, [refresh]);

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      {showSplash ? (
        <SplashScreen />
      ) : loading ? (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      ) : viewOnboarding ? (
        // userData.roles[0].name === "User"? (
        //   <MainMenuScreen/> 
        // ) : userData.roles[0].name === "Employee"? (
        //   <AddProductScreen />
        // ) : (
        //   <LoginSection />
        // )
          <NavigationSection />
      ) : (
        <Onboarding setRefresh={() => setRefresh(!refresh)} />
      )}
    </NavigationContainer>
  );
}