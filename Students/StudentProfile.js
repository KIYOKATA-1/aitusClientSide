import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import { PrStyle } from '../StudentStyles/studentProfile';
import IMAGES from '../assets/img';

export default function StudentProfile() {
  return (
    <SafeAreaView style={PrStyle.container}>
      <StatusBar style="auto" />

      <View style={PrStyle.userDataC}>
        <Image source={IMAGES.AVATAR} style={PrStyle.avatar} />
        <View style={PrStyle.userData}>
          <Text style={PrStyle.username}>Name Lastname</Text>
          <Text style={PrStyle.username}>Barcode</Text>
        </View>
      </View>
      
      <View style={PrStyle.academData}>
        <View style={PrStyle.academRow}>
          <View style={PrStyle.academItem}>
            <Text style={PrStyle.academLabel}>Course</Text>
            <Text style={PrStyle.academValue}>1</Text>
          </View>
          <View style={PrStyle.academItem}>
            <Text style={PrStyle.academLabel}>Group</Text>
            <Text style={PrStyle.academValue}>Group Name</Text>
          </View>
        </View>
        <View style={PrStyle.academRow}>
          <View style={PrStyle.academItem}>
            <Text style={PrStyle.academLabel}>National</Text>
            <Text style={PrStyle.academValue}>Nationality</Text>
          </View>
          <View style={PrStyle.academItem}>
            <Text style={PrStyle.academLabel}>Gender</Text>
            <Text style={PrStyle.academValue}>Gender</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}