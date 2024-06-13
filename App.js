import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import AppLoading from 'expo-app-loading';
import Signin from './Components/Signin';
import StudentNav from './Students/StudentNavigate';
import TeacherNav from './Teachers/TeacherNavigate';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'noto-sans': require('./assets/Fonts/NotoSansSogdian-Regular.ttf'),
  });

  const [font, setFont] = useState(false);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      try {
        await SplashScreen.preventAutoHideAsync(); 
        await SplashScreen.hideAsync();
      } catch (e) {
        console.warn("Error with splash screen: ", e);
      }
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; 
  }

  if (!font) {
    return (
      <AppLoading
        startAsync={useFonts} 
        onFinish={() => {
          setFont(true);
          onLayoutRootView(); // Make sure to call this after setting fonts
        }}
        onError={console.warn}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Login" component={Signin} />
        <Stack.Screen name="StudentNav" component={StudentNav} />
        <Stack.Screen name="TeacherNav" component={TeacherNav} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
