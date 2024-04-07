import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    body: {
        backgroundColor: '#c3c3dc',
    },

    mainContainer:{
        width:"100%",
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingHorizontal: 15, 
        paddingVertical: 7
    },
    bottomBorder:{
        width: "auto",
        height: 1,
        backgroundColor: "white",
    },
    nameImage:{
        marginTop: 4,
        width: 180,
        height: 30,
    },
    IconsSize:{
        width: 55,
        height: 30,
    }
});
