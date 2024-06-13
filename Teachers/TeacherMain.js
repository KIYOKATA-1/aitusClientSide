import React, { useState } from 'react';
import { StatusBar, SafeAreaView, Text, View, FlatList, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import Header from '../Components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUsers, faAlignCenter } from '@fortawesome/free-solid-svg-icons';
import { TMstyle } from '../TeacherStyles/teacherMain';
import { Picker } from '@react-native-picker/picker';

export default function TeacherMain() {
  const [trimester, setTrimester] = useState('1');
  const [course, setCourse] = useState('1');
  const [section, setSection] = useState('SE');

  return (
    <SafeAreaView style={TMstyle.container}>
    <StatusBar style="auto" />
    <Header />
    <View style={TMstyle.inlineContainer}>
        <View style={TMstyle.dropdownContainer}>
          <Text style={TMstyle.dropdownText}>Trimester {trimester}</Text>
          <Picker
            selectedValue={trimester}
            onValueChange={(itemValue, itemIndex) => setTrimester(itemValue)}
            style={TMstyle.picker}
            mode="dropdown"
          >
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
          </Picker>
        </View>
        <View style={TMstyle.dropdownContainer}>
          <Text style={TMstyle.dropdownText}>Course {course}</Text>
          <Picker
            selectedValue={course}
            onValueChange={(itemValue, itemIndex) => setCourse(itemValue)}
            style={TMstyle.picker}
            mode="dropdown"
          >
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
          </Picker>
        </View>
        <View style={TMstyle.dropdownContainer}>
          <Text style={TMstyle.dropdownText}>Major {section}</Text>
          <Picker
            selectedValue={section}
            onValueChange={(itemValue, itemIndex) => setSection(itemValue)}
            style={TMstyle.picker}
            mode="dropdown"
          >
            <Picker.Item label="SE" value="SE" />
            <Picker.Item label="IT" value="IT" />
          </Picker>
        </View>
      </View>
  </SafeAreaView>
  );
}