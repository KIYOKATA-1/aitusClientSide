import React, { useState } from 'react';
import { StatusBar, SafeAreaView, Text, View, TouchableOpacity, Modal, FlatList, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Header from '../Components/Header';
import { TMstyle } from '../TeacherStyles/teacherMain';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGraduationCap, faUserGroup, faX } from '@fortawesome/free-solid-svg-icons';
import { groups, getSubjectsForGroup } from '../Components/MajorData';

export default function TeacherMain({ navigation }) {
  const [subject, setSubject] = useState('');
  const [group, setGroup] = useState('SE-2201');
  const [groupModalVisible, setGroupModalVisible] = useState(false);
  const [subjectModalVisible, setSubjectModalVisible] = useState(false);
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [timePickerVisible, setTimePickerVisible] = useState(false);
  const [currentDateId, setCurrentDateId] = useState(null);
  const [availableSubjects, setAvailableSubjects] = useState(getSubjectsForGroup('SE-2201'));
  const [dates, setDates] = useState([{ id: 1, date: '2024-06-20', time: '10:00' }]);

  const handleGroupChange = (groupName) => {
    setGroup(groupName);
    setAvailableSubjects(getSubjectsForGroup(groupName));
    setSubject(''); // сбрасываем выбранный предмет при изменении группы
    setGroupModalVisible(false);
  };

  const handleSubjectChange = (subjectName) => {
    setSubject(subjectName);
    setSubjectModalVisible(false);
  };

  const addDate = () => {
    const newDate = { id: dates.length + 1, date: '', time: '' };
    setDates([...dates, newDate]);
    setCurrentDateId(newDate.id);
    setDatePickerVisible(true);
  };

  const removeDate = (id) => {
    setDates(dates.filter(date => date.id !== id));
  };

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      const currentDate = selectedDate || new Date();
      const formattedDate = currentDate.toISOString().split('T')[0];
      const updatedDates = dates.map(date => {
        if (date.id === currentDateId) {
          return { ...date, date: formattedDate };
        }
        return date;
      });
      setDates(updatedDates);
      setDatePickerVisible(false);
      setTimePickerVisible(true);
    } else {
      setDatePickerVisible(false);
    }
  };

  const handleTimeChange = (event, selectedTime) => {
    if (selectedTime) {
      const currentTime = selectedTime || new Date();
      const hours = currentTime.getHours().toString().padStart(2, '0');
      const minutes = currentTime.getMinutes().toString().padStart(2, '0');
      const formattedTime = `${hours}:${minutes}`;
      const updatedDates = dates.map(date => {
        if (date.id === currentDateId) {
          return { ...date, time: formattedTime };
        }
        return date;
      });
      setDates(updatedDates);
    }
    setTimePickerVisible(false);
    setCurrentDateId(null);
  };

  return (
    <SafeAreaView style={TMstyle.container}>
      <StatusBar style="auto" />
      <Header />
      <ScrollView style={TMstyle.teacherData}>
        <View style={TMstyle.dropdowns}>
          <View style={TMstyle.inlineContainer}>
            <TouchableOpacity style={TMstyle.dropdownContainer} onPress={() => setSubjectModalVisible(true)} disabled={!availableSubjects.length}>
              <FontAwesomeIcon icon={faGraduationCap} size={16} />
              <Text style={TMstyle.value}>{subject || 'Subject'}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={TMstyle.dropdownContainer} onPress={() => setGroupModalVisible(true)}>
              <FontAwesomeIcon icon={faUserGroup} size={16} />
              <Text style={TMstyle.value}>{group}</Text>
            </TouchableOpacity>
          </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={groupModalVisible}
            onRequestClose={() => setGroupModalVisible(false)}
          >
            <View style={TMstyle.centeredView}>
              <View style={TMstyle.modalView}>
                <FlatList
                  data={groups}
                  keyExtractor={(item) => item.groupName}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={TMstyle.optionButton}
                      onPress={() => handleGroupChange(item.groupName)}
                    >
                      <Text style={TMstyle.optionText}>{item.groupName}</Text>
                    </TouchableOpacity>
                  )}
                />
                <TouchableOpacity
                  style={TMstyle.closeButton}
                  onPress={() => setGroupModalVisible(false)}
                >
                  <FontAwesomeIcon icon={faX} size={18} style={TMstyle.closeIcon}/>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <Modal
            animationType="slide"
            transparent={true}
            visible={subjectModalVisible}
            onRequestClose={() => setSubjectModalVisible(false)}
          >
            <View style={TMstyle.centeredView}>
              <View style={TMstyle.modalView}>
                <FlatList
                  data={availableSubjects}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={TMstyle.optionButton}
                      onPress={() => handleSubjectChange(item)}
                    >
                      <Text style={TMstyle.optionText}>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
                <TouchableOpacity
                  style={TMstyle.closeButton}
                  onPress={() => setSubjectModalVisible(false)}
                >
                  <FontAwesomeIcon icon={faX} size={18} style={TMstyle.closeIcon}/>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
        <View style={TMstyle.main}>
          {dates.map((dateItem) => (
            <TouchableOpacity
              key={dateItem.id}
              onPress={() =>
                navigation.navigate('Subject', {
                  groupNum: group,
                  subjectName: subject,
                  selectedDate: dateItem.date,
                })
              }
            >
              <View style={TMstyle.dateContainer}>
                <View style={TMstyle.dateTimeContainer}>
                  <Text style={TMstyle.dateText}>{dateItem.date || 'No date selected'}</Text>
                  <Text style={TMstyle.separator}>|</Text>
                  <Text style={TMstyle.timeText}>{dateItem.time || 'No time selected'}</Text>
                </View>
                <TouchableOpacity
                  style={TMstyle.removeButton}
                  onPress={() => removeDate(dateItem.id)}
                >
                  <FontAwesomeIcon icon={faX} size={18} style={TMstyle.removeIcon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={TMstyle.addButton} onPress={addDate}>
            <Text style={TMstyle.addButtonText}>Add Date</Text>
          </TouchableOpacity>
        </View>
        {datePickerVisible && (
          <DateTimePicker
            value={new Date()}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}
        {timePickerVisible && (
          <DateTimePicker
            value={new Date()}
            mode="time"
            display="default"
            onChange={handleTimeChange}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}