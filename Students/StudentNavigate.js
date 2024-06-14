import React from "react";
import StudentMain from "./StudentMain";
import StudentProfile from "./StudentProfile";
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons/faGraduationCap'
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faBell } from '@fortawesome/free-solid-svg-icons/faBell'

const TriangleIcon = () => (
  <View
    style={{
      width: 25,
      height: 5,
      backgroundColor: "#0f6cbf",
      borderRadius: 50,
      borderStyle: "solid",
      borderTopColor: "#0f6cbf",
      top: -35,
      alignSelf: 'center',
    }}
  />
);

const Tab = createBottomTabNavigator();

export default function StudentNav() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarStyle: {
          paddingHorizontal: 5,
          backgroundColor: 'snow',
          borderTopWidth: 0,
          shadowColor: 'black',
          elevation: 5,
          paddingTop: 25,
          paddingBottom: 24.7,
          height: 50,
          borderColor: '#0f6cbf',
          borderRadius: 3,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          display: 'none'
        }
      })}
    >

      <Tab.Screen
        name="Main"
        component={StudentMain}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <FontAwesomeIcon icon={faHouse} size={25} />
              {focused && <TriangleIcon />}
            </>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={StudentProfile}
        options={{
          title: "P",
          tabBarIcon: ({ focused }) => (
            <>
              <FontAwesomeIcon icon={faUser} size={23} />
              {focused && <TriangleIcon />}
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
