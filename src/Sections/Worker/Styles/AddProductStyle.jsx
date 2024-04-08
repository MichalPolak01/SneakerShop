import { StyleSheet, Dimensions } from "react-native";

const primaryColor = '#411c5d';
const secColor = '#694182';

export const styles = StyleSheet.create({
    body: {
        backgroundColor: '#c3c3dc',
        flex: 1, 
        alignItems: 'center',
    },
    mainContainer:{
        flexGrow: 1,
        alignItems: 'center',
        width: 411 // Później do zmiany bo belka się buguje
    },
    titleText:{
        color: primaryColor,
        fontWeight: 'bold',
        fontSize: 40,
        marginTop: 12,
        marginBottom: 10,
    },
    inputContainer:{
        backgroundColor: secColor,
        width: 350,
        height: 50,
        borderColor: primaryColor,
        borderWidth: 3,
        borderRadius: 20,
        marginTop: 15,
    },
    inputText:{
        marginLeft: 20,
        marginRight: 20,
        color: 'white',
        fontSize: 15,
        fontWeight: '600'
    },
    placeholder: {
        color: 'white',
      },
    buttonContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: primaryColor,
        width: 350,
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
