import { StyleSheet } from "react-native";
export const PrStyle = StyleSheet.create({
    container: {
      margin: 0,
      padding: 0,
      paddingTop: 40,
      flex: 1,
    },
    avatar: {
      position: 'relative',
      width: 75,
      height: 75,
      borderRadius: 50,
      margin: 10,
    },
    userDataC: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    userData: {
      position: 'relative',
      flexDirection: 'column',
      marginHorizontal: 10,
      alignItems: 'center',
    },
    username: {
      position: 'relative',
      fontSize: 16,
      fontFamily: 'noto-sans',
      textTransform: 'uppercase',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    academData: {
      marginTop: 20,
      paddingHorizontal: 10,
    },
    academRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    academItem: {
      flex: 1,
      alignItems: 'center',
    },
    academLabel: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    academValue: {
      fontSize: 16,
    },
  });