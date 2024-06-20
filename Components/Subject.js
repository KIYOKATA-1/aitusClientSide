import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import { SbStyle } from '../styles/subject';
import Header from './Header';
import students from './studentData';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';

const Subject = ({ route }) => {
  const { groupNum, subjectName, selectedDate } = route.params;
  const [attendance, setAttendance] = useState({});
  const [date, setDate] = useState(new Date(selectedDate));
  const [showPicker, setShowPicker] = useState(false);
  const navigation = useNavigation();

  const attendanceOptions = (id) => [
    { id: `${id}-1`, value: 'Present', selected: attendance[id] === 'Present', onPress: () => toggleAttendance(id, 'Present') },
    { id: `${id}-2`, value: 'Late', selected: attendance[id] === 'Late', onPress: () => toggleAttendance(id, 'Late') },
    { id: `${id}-3`, value: 'Absent', selected: attendance[id] === 'Absent', onPress: () => toggleAttendance(id, 'Absent') },
  ];

  const toggleAttendance = (id, value) => {
    setAttendance((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const markAllPresent = () => {
    const allPresent = students.reduce((acc, student) => {
      acc[student.id] = 'Present';
      return acc;
    }, {});
    setAttendance(allPresent);
  };

  const goBack = () => {
    navigation.goBack();
  };

  const showDatePicker = () => {
    setShowPicker(true);
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(false);
    setDate(currentDate);
    markAllPresent();
  };

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <View style={SbStyle.container}>
      <Header />

      <View style={SbStyle.studentData}>
             <View style={SbStyle.textGroup}>
                <Text style={SbStyle.subjectN}>{subjectName}</Text>
                <Text style={SbStyle.group}>{groupNum}</Text>
            </View>

            <View style={SbStyle.btnGroup}>
                <TouchableOpacity onPress={showDatePicker} style={SbStyle.dateBtn}>
                    <Text style={SbStyle.buttonText}>{showPicker ? 'Select Date' : formatDate(date)}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={goBack} style={SbStyle.backButton}>
                    <Text style={SbStyle.backBtnText}>Go Back</Text>
                </TouchableOpacity>
            </View>
      </View>

      <View style={SbStyle.infoBlock}>
        <Text style={SbStyle.infoText}>Students</Text>
        <View style={SbStyle.infoLabels}>
          <Text style={SbStyle.labelText}>Absent</Text>
          <Text style={SbStyle.labelText}>Late</Text>
          <Text style={SbStyle.labelText}>Present</Text>
        </View>
      </View>

      <ScrollView style={SbStyle.main}>
        {students.map((student, index) => (
          <View key={student.id} style={SbStyle.studentRow}>
            <Text style={SbStyle.studentName}>{`${index + 1}. ${student.name}`}</Text>
            <RadioGroup radioButtons={attendanceOptions(student.id)} layout="row" />
          </View>
        ))}
      </ScrollView>

      {showPicker && <DateTimePicker value={date} mode="date" display="default" onChange={onDateChange} />}
    </View>
  );
};

export default Subject;
