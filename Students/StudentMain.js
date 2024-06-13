import React, { useState } from 'react';
import { StatusBar, SafeAreaView, Text, View, FlatList, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import Header from '../Components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUsers, faAlignCenter } from '@fortawesome/free-solid-svg-icons';
import { Mstyle } from '../styles/studentMain';

const subjects = [
  { id: '1', name: 'Calculus 1', teacher: 'Teacher Name' },
  { id: '2', name: 'Foreign Language 1', teacher: 'Teacher' },
  { id: '3', name: 'Linear Algebra', teacher: 'Teacher' },
  { id: '4', name: 'Physical Education', teacher: 'Teacher' },
  { id: '5', name: 'Information and Communication Technologies ', teacher: 'Teacher' },
  { id: '6', name: 'Introduction to Programming 1', teacher: 'Teacher' },
];

const weeks = [
    { id: '1', weekNum: 'Week 1', assignments: [{ assignmentName: 'Assignment 1', fileName: 'hw1.pdf' }] },
    { id: '2', weekNum: 'Week 2', assignments: [{ assignmentName: 'Assignment 2', fileName: 'project1.zip' }] },
    { id: '3', weekNum: 'Week 3', assignments: [{ assignmentName: 'Lab 3', fileName: 'lab3.docx' }] },
    { id: '4', weekNum: 'Week 4', assignments: [{ assignmentName: 'Bonus task', fileName: 'bonus.pdf' }] },
    { id: '5', weekNum: 'Week 5', assignments: [{ assignmentName: 'EndTerm', fileName: 'quiz' }] },
];

export default function StudentMain() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);

  const openModal = (item) => {
    setSelectedSubject(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={Mstyle.container}>
      <StatusBar style="auto" />
      <Header />
      <FlatList
        data={subjects}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => openModal(item)} style={Mstyle.subject}>
            <Text style={Mstyle.subjectDataTxt}>{item.name} | {item.teacher}</Text>
          </TouchableOpacity>
        )}
      />


      {selectedSubject && (
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={closeModal}
        >

          <View style={Mstyle.modalData}>
            <View style={Mstyle.subjectBlock}>
                <Text style={Mstyle.subjectModalTxt}>{selectedSubject.name} | {selectedSubject.teacher}</Text>
            </View>
            <View style={Mstyle.menu}>

              <TouchableOpacity onPress={() => {}} style={Mstyle.subjectBtn}>
                <View style={Mstyle.menuData}>
                  <FontAwesomeIcon icon={faAlignCenter} size={20} color="#0F6CBF" style={{ marginRight: 10 }} />
                  <Text style={Mstyle.menuDataText}>Grades</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {}} style={Mstyle.subjectBtn}>
                <View style={Mstyle.menuData}>
                  <FontAwesomeIcon icon={faUsers} size={20} color="#0F6CBF" style={{ marginRight: 10 }} />
                  <Text style={Mstyle.menuDataText}>Attendance</Text>
                </View>
              </TouchableOpacity>

            </View>
            
            <FlatList
                data={weeks}
                keyExtractor={week => week.id}
                renderItem={({ item }) => (

                  <View style={Mstyle.week}>
                    <Text>{item.weekNum}</Text>
                    {item.assignments.map((assignment, index) => (
                      <View key={index} style={Mstyle.assignment}>

                        <Text style={Mstyle.assignmentText}>
                          {assignment.assignmentName} - File: {assignment.fileName}
                        </Text>

                      </View>
                    ))}
                  </View>
                )}
            />


            <TouchableOpacity onPress={closeModal} style={Mstyle.closeBtn}>
              <Text style={Mstyle.closeBtnText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
}
