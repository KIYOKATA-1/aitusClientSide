import React, { useState } from 'react';
import { StatusBar, SafeAreaView, Text, View, FlatList, TouchableOpacity, Modal } from 'react-native';
import Header from '../Components/Header';
import { Mstyle } from '../StudentStyles/studentMain';
import AttendanceCircle from '../Components/AttendanceCircle';

const subjects = [
  { id: '1', name: 'Calculus 1', teacher: 'Teacher Name', dates: ['2024-06-10', '2024-06-17'] },
  { id: '2', name: 'Foreign Language 1', teacher: 'Teacher', dates: ['2024-06-11', '2024-06-18'] },
  { id: '3', name: 'Linear Algebra', teacher: 'Teacher', dates: ['2024-06-12', '2024-06-19'] },
  { id: '4', name: 'Physical Education', teacher: 'Teacher', dates: ['2024-06-13', '2024-06-20'] },
  { id: '5', name: 'Information and Communication Technologies', teacher: 'Teacher', dates: ['2024-06-14', '2024-06-21'] },
  { id: '6', name: 'Introduction to Programming 1', teacher: 'Teacher', dates: ['2024-06-15', '2024-06-22'] },
];

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getRandomAttendance = () => Math.floor(Math.random() * 100) + 1;

const subjectsWithAttendance = subjects.map(subject => ({
  ...subject,
  attendance: getRandomAttendance(),
}));

const getBorderColor = (attendance) => {
  if (attendance < 70) {
    return '#FF0000';
  } else if (attendance >= 70 && attendance < 85) {
    return '#CCFF00';
  } else {
    return '#00FF0A';
  }
};

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

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = days[date.getDay()];
    const dayOfMonth = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month = months[date.getMonth()].slice(0, 3);
    const year = date.getFullYear().toString().slice(2);
    return `${day} ${dayOfMonth} ${month} ${year}`;
  };

  return (
    <SafeAreaView style={Mstyle.container}>
      <StatusBar style="auto" />
      <Header />

      <FlatList
        data={subjectsWithAttendance}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => openModal(item)} style={Mstyle.subject}>
            <View style={Mstyle.subjectContent}>
              <Text style={Mstyle.subjectDataTxt}>{item.name} | {item.teacher}</Text>
              <View style={Mstyle.attendance}>
                <AttendanceCircle attendance={item.attendance} color={getBorderColor(item.attendance)} />
              </View>
            </View>
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
            <View style={Mstyle.subjectInfo}>
              <Text style={Mstyle.subjectName}>{selectedSubject.name} | {selectedSubject.teacher}</Text>
            </View>

            <View style={Mstyle.header}>
              <Text style={Mstyle.headerText}>Date</Text>
              <Text style={Mstyle.headerText}>Status</Text>
              <Text style={Mstyle.headerText}>Points</Text>
            </View>

            <FlatList
              data={selectedSubject.dates.map((date, index) => ({ id: index.toString(), date }))}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <View style={Mstyle.dateItem}>
                  <Text style={[Mstyle.itemText, Mstyle.dateData]}>{formatDate(item.date)}</Text>
                  <Text style={Mstyle.itemText}>Absent</Text>
                  <Text style={Mstyle.itemText}>0/2</Text>
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
