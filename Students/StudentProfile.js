import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../Components/Header';
import { PrStyle } from '../StudentStyles/studentProfile';

export default function StudentProfile() {
  return (
    <View style={PrStyle.container}>
      <Header />
      <Text>Profile</Text>
      <StatusBar style="auto" />
    </View>
  );
}