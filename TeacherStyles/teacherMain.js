import { StyleSheet } from "react-native";
export const TMstyle = StyleSheet.create({
    container:{
        margin: 0,
        padding: 0,
        paddingTop: 20,
        flex: 1,
    },
    inlineContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
    dropdownContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    picker: {
        flex: 1,
        height: 20,
    },
    dropdownText: {
        fontSize: 14,
        fontFamily: 'noto-sans',
        position: 'relative',
        marginRight: 1,
    },
    pickerItem:{
        position: 'relative',
        fontSize: 14,
        width: 25,
        height: 20,
    }
});