import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const primaryColor = '#411c5d';

export const styles = StyleSheet.create({
    body: {
        backgroundColor: '#c3c3dc',
    },

    mainContainer:{
        width,
        height: 50,
        flexDirection: 'row', 
        justifyContent: 'space-around',
        alignItems: 'center',
        // paddingHorizontal: 15, 
        // paddingVertical: 7,
        backgroundColor: "white",
        // borderColor: primaryColor,
        // borderWidth: 3,
        // borderRadius: 20,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    IconsSize:{
        // width: 70,
        // height: 40,
    }
});
