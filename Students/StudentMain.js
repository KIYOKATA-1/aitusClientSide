import React, { useState } from 'react';
import { StatusBar, SafeAreaView, Text, View, FlatList, TouchableOpacity, Modal } from 'react-native';
import Header from '../Components/Header';
import { Mstyle } from '../StudentStyles/studentMain';

const subjects = [
  { id: '1', name: 'Calculus 1', teacher: 'Teacher Name' },
  { id: '2', name: 'Foreign Language 1', teacher: 'Teacher' },
  { id: '3', name: 'Linear Algebra', teacher: 'Teacher' },
  { id: '4', name: 'Physical Education', teacher: 'Teacher' },
  { id: '5', name: 'Information and Communication Technologies ', teacher: 'Teacher' },
  { id: '6', name: 'Introduction to Programming 1', teacher: 'Teacher' },
];

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function StudentMain() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  const openModal = (item) => {
    setSelectedSubject(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const changeMonth = () => {
    setSelectedMonth((prevMonth) => (prevMonth + 1) % 12);
  };

  const getDaysInMonth = (month) => {
    const year = new Date().getFullYear();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const daysArray = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      const dayOfWeek = days[date.getDay()];
      const day = i < 10 ? `0${i}` : i;
      const monthFormatted = months[month].slice(0, 3);
      const yearFormatted = year.toString().slice(2);

      daysArray.push({ id: i.toString(), date: `${dayOfWeek} ${day} ${monthFormatted} ${yearFormatted}` });
    }
    return daysArray;
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
            <View style={Mstyle.subjectContent}>
              <Text style={Mstyle.subjectDataTxt}>{item.name} | {item.teacher}</Text>
              <View style={Mstyle.attendance}>
                <Text>90</Text>
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

            <TouchableOpacity onPress={changeMonth} style={Mstyle.changeMonthBtn}>
              <Text style={Mstyle.changeMonthBtnText}>Select Month | {months[selectedMonth]}</Text>
            </TouchableOpacity>

            <View style={Mstyle.header}>
              <Text style={Mstyle.headerText}>Date</Text>
              <Text style={Mstyle.headerText}>Status</Text>
              <Text style={Mstyle.headerText}>Points</Text>
            </View>

            <FlatList
              data={getDaysInMonth(selectedMonth)}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <View style={Mstyle.dateItem}>
                  <Text style={Mstyle.itemText}>{item.date}</Text>
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
