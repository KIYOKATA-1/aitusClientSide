import React, { useState } from 'react';
import { StatusBar, SafeAreaView, Text, View, TouchableOpacity, Modal, FlatList, ScrollView } from 'react-native';
import Header from '../Components/Header';
import { TMstyle } from '../TeacherStyles/teacherMain';
import { FontAwesome } from 'react-native-vector-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const majors = [
  { fullName: 'Computer Science', shortName: 'CS' },
  { fullName: 'Software Engineering', shortName: 'SE' },
  { fullName: 'Big Data Analysis', shortName: 'BDA' },
  { fullName: 'Media Technologies', shortName: 'MT' },
  { fullName: 'Mathematical and Computational Science', shortName: 'MCS' },
  { fullName: 'Big Data in Healthcare', shortName: 'BDH' },
  { fullName: 'Cybersecurity', shortName: 'CBS' },
  { fullName: 'Industrial Internet of Things', shortName: 'IIOT' },
  { fullName: 'Electronic Engineering', shortName: 'EE' },
  { fullName: 'IT Management', shortName: 'ITM' },
  { fullName: 'IT Entrepreneurship', shortName: 'ITE' },
  { fullName: 'AI Business', shortName: 'AIB' },
  { fullName: 'Digital Journalism', shortName: 'DJ' },
];

export default function TeacherMain() {
  const [trimester, setTrimester] = useState('1');
  const [course, setCourse] = useState('1');
  const [section, setSection] = useState('SE');
  const [modalVisible, setModalVisible] = useState(false);

  const handleTrimesterChange = () => {
    setTrimester((prevTrimester) => {
      const nextTrimester = (parseInt(prevTrimester) % 3) + 1;
      return nextTrimester.toString();
    });
  };

  const handleCourseChange = () => {
    setCourse((prevCourse) => {
      const nextCourse = (parseInt(prevCourse) % 3) + 1;
      return nextCourse.toString();
    });
  };

  const handleMajorChange = (shortName) => {
    setSection(shortName);
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={TMstyle.container}>
      <StatusBar style="auto" />
      <Header />

      <ScrollView>
        
        <View style={TMstyle.dropdowns}>
          <View style={TMstyle.inlineContainer}>

            <TouchableOpacity style={TMstyle.dropdownContainer} onPress={handleTrimesterChange}>
              <Text style={TMstyle.dropdownText}>Trimester</Text>
              <Text style={TMstyle.value}>{trimester}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={TMstyle.dropdownContainer} onPress={handleCourseChange}>
              <Text style={TMstyle.dropdownText}>Course</Text>
              <Text style={TMstyle.value}>{course}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={TMstyle.dropdownContainer} onPress={() => setModalVisible(true)}>
              <Text style={TMstyle.dropdownText}>Major</Text>
              <Text style={TMstyle.value}>{section}</Text>
            </TouchableOpacity>
            </View>

            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}
              >
              <View style={TMstyle.centeredView}>
                <View style={TMstyle.modalView}>
                  <FlatList
                    data={majors}
                    keyExtractor={(item) => item.shortName}
                    renderItem={({ item }) => (

                  <TouchableOpacity
                    style={TMstyle.optionButton}
                    onPress={() => handleMajorChange(item.shortName)}
                  >
                    <Text style={TMstyle.optionText}>{item.fullName}</Text>
                  </TouchableOpacity>
                    )}
                  />

                  <TouchableOpacity
                    style={TMstyle.closeButton}
                    onPress={() => setModalVisible(false)}
                  >
                    <FontAwesomeIcon icon={faX} size={18} style={TMstyle.closeIcon}/>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
        </View>

        <View style={TMstyle.main}>
          <View style={TMstyle.subjectBlock}>
            
          </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}