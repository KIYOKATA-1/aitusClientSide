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
        height: 40,
    },
    dropdownText: {
        fontSize: 14,
        fontFamily: 'noto-sans',
        marginRight: 10,
    }
});