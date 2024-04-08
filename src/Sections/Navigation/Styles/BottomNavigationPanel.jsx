import { StyleSheet } from "react-native";

const primaryColor = '#411c5d';

export const styles = StyleSheet.create({
    body: {
        backgroundColor: '#c3c3dc',
    },

    mainContainer:{
        width:"100%",
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingHorizontal: 15, 
        paddingVertical: 7,
        backgroundColor: "white",
        borderColor: primaryColor,
        borderWidth: 3,
        borderRadius: 10,
    },
    IconsSize:{
        width: 70,
        height: 40,
    }
});
