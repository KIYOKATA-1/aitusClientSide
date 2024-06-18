import { StyleSheet } from "react-native";
export const SbStyle = StyleSheet.create({
    container:{
        margin: 0,
        padding: 0,
        paddingTop: 20,
        flex: 1,
    },
    studentData:{
        position:'relative',
        margin: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    group:{
        position:'relative',
        fontSize: 16,
        fontWeight: '400',
        fontStyle: 'italic'
    },
    subjectN:{
        position: 'relative',
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 10,
    },
    week:{
        position: 'relative',
        padding: 10,
        height: 100,
        borderTopWidth: 0.5,
    },
    studentRow: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderTopWidth: 0.5,
    },
    studentName: { 
        fontSize: 16 
    },
    presentButton: { 
        backgroundColor: '#00FF0A', 
        padding: 10, 
        borderRadius: 50,
        width: 90,
    },
    absentButton: { 
        backgroundColor: '#FF0000', 
        padding: 10, 
        width: 90,
        borderRadius: 50,
    },
    lateButton: { 
        backgroundColor: '#CCFF00', 
        padding: 10, 
        borderRadius: 50,
        width: 90,
    },
    buttonText: { 
        color: '#000', 
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily: 'noto-sans',
        fontWeight: 'bold'
    },
    AllPresent:{
        position: 'relative',
        borderWidth: 1,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    gobackContainer:{
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButton:{
        position: 'relative',
        borderWidth: 1,
        height: 40,
        borderRadius: 15,
        justifyContent: 'center',
        padding: 5,

    },
    infoBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
      },
      infoText: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      infoLabels: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 150,
      },
      labelText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      separator: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      main: {
        flex: 1,
      },
      studentRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        paddingVertical: 10,
        borderBottomWidth: 1,
        paddingRight: 10,
        borderBottomColor: 'lightgray',
        margin: 5,
      },
      studentName: {
        fontSize: 16,
        width: '50%',
        margin: 5,
      },
});