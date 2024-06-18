import React, { useState } from 'react';
import { StatusBar, SafeAreaView, Text, View, TouchableOpacity, Modal, FlatList, ScrollView } from 'react-native';
import Header from '../Components/Header';
import { TMstyle } from '../TeacherStyles/teacherMain';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { majors, getSubjectForMajor } from '../Components/MajorData';

export default function TeacherMain({ navigation }) {
  const [trimester, setTrimester] = useState('1');
  const [course, setCourse] = useState('1');
  const [section, setSection] = useState('SE');
  const [modalVisible, setModalVisible] = useState(false);
  const [majorData, setMajorData] = useState(getSubjectForMajor('SE'));

  const handleMajorChange = (shortName) => {
    setSection(shortName);
    setMajorData(getSubjectForMajor(shortName));
    setModalVisible(false);
  };

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
        {majorData.subjects.map((subject, subjectIndex) => (
            <ScrollView key={subjectIndex} style={TMstyle.subjectBlock}>
              <Text style={TMstyle.subjectName}>{subject.name}</Text>
                <View style={TMstyle.groupData}>
                {subject.groups.map((group, groupIndex) => (
                  <TouchableOpacity key={groupIndex} style={TMstyle.groupBtn} onPress={() => navigation.navigate('Subject', {
                                    groupNum: group, subjectName: subject.name
                  })}>
                    <Text style={TMstyle.groupDataText}>{group}</Text>
                  </TouchableOpacity>
                ))}
                </View>
            </ScrollView>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
