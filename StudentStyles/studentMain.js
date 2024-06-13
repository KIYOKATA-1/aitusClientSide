import { StyleSheet } from "react-native";
export const Mstyle = StyleSheet.create({
    container:{
        margin: 0,
        padding: 0,
        paddingTop: 20,
        flex: 1,
    },
    subject:{
      width: 360,
      backgroundColor: '#FDFDFD',
      height: 70,
      borderColor: '#0F6CBF',
      position: 'relative',
      borderWidth: 1,
      borderLeftWidth: 5,
      position: 'relative',
      justifyContent: 'center',
      borderRadius: 10,
      paddingLeft: 20,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      alignSelf: 'center',
      marginTop: 20,
      boxShadow: '0px 5px 6px rgba(0, 0, 0, 0.1)',
      elevation: 10,
    },
    subjectDataTxt:{
      fontSize: 14,
      fontFamily: 'noto-sans'
    },
    subjectModalTxt:{
        fontSize: 15,
        fontFamily: 'noto-sans',
        margin: 5,
      },
    menu:{
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        padding: 10,
        position: 'relative',
    },
    menuData:{
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    menuDataText:{
        position: 'relative',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#0F6CBF',
        fontSize: 14,
    },
    week:{
        padding: 10, 
        marginTop: 10, 
        backgroundColor: '#f0f0f0', 
        borderRadius: 5,
    },
    closeBtn:{
        marginTop: 20,
        padding: 10, 
        backgroundColor: 'red', 
        width: 350,
        alignSelf: 'center',
        borderRadius: 5,
        position: 'relative'
    },
    closeBtnText:{
        color: 'white',
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    modalData:{
        position: 'relative',
        marginVertical: 10,
    },
    subjectBlock:{
        position: 'relative',
        borderBottomWidth: 1,
        padding: 10,
    },
    assignment: {
        paddingLeft: 20,
        paddingTop: 5,
        paddingBottom: 5,
    },
    assignmentText: {
        color: '#666',
        fontSize: 14,
    },
});