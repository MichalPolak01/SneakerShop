import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    body: {
        height,
        width,
        backgroundColor: '#C3C7DF'
    },
    background: {
        position: 'absolute',
        height,
        width,
    },
    header: {
        height: height/3.1,
    },
    iconBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: -20,
        marginHorizontal: 2,
    },
    icon: {
        width: width/2.3,
        height: 120,
    },
    logo: {
        marginTop: -30,
        width: width/1.5,
        objectFit: 'contain',
        alignSelf: 'center',
    },
    title: {
        marginTop: -20,
        color: '#fff',
        textAlign: 'center',
        fontSize: 45,
        fontFamily: 'Mina-Bold'
    },

    /* Form */
    form: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonBox: {
        width: '75%',
        height: 55,
        marginVertical: 10,
        backgroundColor: '#490e75',
        borderRadius: 15
    },
    button: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 30,
        color: '#fff',
        fontFamily: 'Mina-Bold'
    },
    signUp: {
        display: 'flex',
        flexDirection: 'row',
    },
    signUpText: {
        color: '#000',
        fontFamily: 'Mina-Regular'
    },
    signUpLink: {
        color: '#490e75',
        fontFamily: 'Mina-Bold'
    }
});