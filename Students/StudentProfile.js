import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import Header from '../Components/Header';
import { PrStyle } from '../StudentStyles/studentProfile';
import IMAGES from '../assets/img';

export default function StudentProfile() {
  return (
    <SafeAreaView style={PrStyle.container}>
      <Header />
      <StatusBar style="auto" />

      <View style={PrStyle.userDataC}>
        <Image source={IMAGES.AVATAR} style={PrStyle.avatar}/>
        <View style={PrStyle.userData}>
          <Text style={PrStyle.username}>Park Pavel</Text>
          <Text style={PrStyle.username}>220529</Text>
        </View>
      </View>

      
    </SafeAreaView>
  );
}