import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import { PrStyle } from '../StudentStyles/studentProfile';
import IMAGES from '../assets/img';

export default function TeacherProfile() {
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
            <Text style={PrStyle.academLabel}>Courses</Text>
            <Text style={PrStyle.academValue}>1, 2</Text>
          </View>
          <View style={PrStyle.academItem}>
            <Text style={PrStyle.academLabel}>Groups</Text>
            <Text style={PrStyle.academValue}>SE-2202</Text>
            <Text style={PrStyle.academValue}>SE-2211</Text>
            <Text style={PrStyle.academValue}>SE-2226</Text>
            <Text style={PrStyle.academValue}>SE-2223</Text>

          </View>
        </View>
        <View style={PrStyle.academRow}>
          <View style={PrStyle.academItem}>
            <Text style={PrStyle.academLabel}>Salary</Text>
            <Text style={PrStyle.academValue}>250.000KZT</Text>
          </View>
          <View style={PrStyle.academItem}>
            <Text style={PrStyle.academLabel}>Subjects</Text>
            <Text style={PrStyle.academValue}>Calculus 1</Text>
            <Text style={PrStyle.academValue}>Linear Algebra</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}