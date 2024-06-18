import React, { useCallback, useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Signin from './Components/Signin';
import StudentNav from './Students/StudentNavigate';
import Subject from './Components/Subject';
import TeacherNav from './Teachers/TeacherNavigate';

const Stack = createStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'noto-sans': require('./assets/Fonts/NotoSans-VariableFont_wdth,wght.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    onLayoutRootView();
  }, [onLayoutRootView]);

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Signin} />
        <Stack.Screen name="StudentNav" component={StudentNav} />
        <Stack.Screen name="TeacherNav" component={TeacherNav} />
        <Stack.Screen name='Subject' component={Subject}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
