import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import { SbStyle } from '../styles/subject';
import Header from './Header';
import students from './studentData';
import { useNavigation } from '@react-navigation/native';

const Subject = ({ route }) => {
  const { groupNum, subjectName } = route.params;
  const [attendance, setAttendance] = useState({});
  const navigation = useNavigation();

  const attendanceOptions = (id) => [
    { id: `${id}-1`, value: 'Present', selected: attendance[id] === 'Present', onPress: () => toggleAttendance(id, 'Present') },
    { id: `${id}-2`, value: 'Late', selected: attendance[id] === 'Late', onPress: () => toggleAttendance(id, 'Late') },
    { id: `${id}-3`, value: 'Absent', selected: attendance[id] === 'Absent', onPress: () => toggleAttendance(id, 'Absent') },
  ];

  const toggleAttendance = (id, value) => {
    setAttendance(prev => ({
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

  return (
    <View style={SbStyle.container}>
      <Header />

      <View style={SbStyle.studentData}>
        <Text style={SbStyle.subjectN}>{subjectName}</Text>
        <Text style={SbStyle.group}>{groupNum}</Text>
        <TouchableOpacity
          onPress={markAllPresent}
          style={SbStyle.AllPresent} 
        >
          <Text style={SbStyle.buttonText}>Present All</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={goBack}
          style={SbStyle.backButton}
        >
          <Text style={SbStyle.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>

      <View style={SbStyle.infoBlock}>
        <Text style={SbStyle.infoText}>Students</Text>
        <View style={SbStyle.infoLabels}>
          <Text style={SbStyle.labelText}>Absent</Text>
          <Text style={SbStyle.separator}>|</Text>
          <Text style={SbStyle.labelText}>Late</Text>
          <Text style={SbStyle.separator}>|</Text>
          <Text style={SbStyle.labelText}>Present</Text>
        </View>
      </View>

      <ScrollView style={SbStyle.main}>
        {students.map((student, index) => (
          <View key={student.id} style={SbStyle.studentRow}>
            <Text style={SbStyle.studentName}>{`${index + 1}. ${student.name}`}</Text>
            <RadioGroup
              radioButtons={attendanceOptions(student.id)}
              layout="row"
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Subject;
