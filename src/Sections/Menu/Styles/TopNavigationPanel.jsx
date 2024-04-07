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
        paddingVertical: 7,
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
    iconsSize:{
        width: 55,
        height: 30,
        marginTop:3,
    },
    navigateText:{
        color: "white",
        width: 55,
        height: 30,
        fontSize: 17,
        marginTop:3,
    }
});
