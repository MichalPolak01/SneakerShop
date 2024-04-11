import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const primaryColor = '#411c5d';
const secColor = '#694182';

export const styles = StyleSheet.create({
    body: {
        backgroundColor: '#c3c3dc',
        flex: 1, 
        alignItems: 'center',
    },
    keyboardBox: {
        flexGrow: 1,        
        width,
    },
    mainContainer:{
        alignItems: 'center',
    },
    titleText:{
        color: primaryColor,
        fontFamily: 'Mina-Bold',
        fontSize: 40,
        marginVertical: 10
    },
    inputContainer:{
        backgroundColor: secColor,
        width: width * 0.9,
        height: 50,
        borderColor: primaryColor,
        borderWidth: 3,
        borderRadius: 20,
        marginTop: 15,
        alignContent: 'center',
        justifyContent: 'center'
    },
    inputText:{
        marginHorizontal: 20,
        color: 'white',
        fontSize: 16,
        fontFamily: 'Mina-Regular',
    },
    placeholder: {
        color: 'white',
    },
    buttonContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: primaryColor,
        width: width * 0.8,
        height: 50,
        borderRadius: 20,
        marginTop: 15,
        marginBottom: 15,
    },
    buttonText:{
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    }
});
