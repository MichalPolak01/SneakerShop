import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    body: {
        flex: 1,
        display: 'flex',
    },
    background: {
        position: 'absolute',
        height: '100%',
        width: '100%',
    },
    header: {
        flex: 1,
    },
    iconBox: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        marginTop: -50,
        alignItems: 'center',
        marginHorizontal: 2,
    },
    icon: {
        flex: 1,
        height: 120,
    },
    icon1: {
        transform: [
            { rotateZ: '-30deg' },
        ] 
    },
    icon2: {
        transform: [
            { rotateZ: '30deg' },
            { rotateY: '-180deg' },
        ] 
    },
    name: {
        width: 275,
        alignSelf: 'center',
    },
    title: {
        flex: 1,
        color: '#fff',
        textAlign: 'center',
        fontSize: 60,
        fontFamily: 'Mina-Bold'
    },
    form: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBox: {
        width: '90%',
        height: 55,
        marginVertical: 5,
        backgroundColor: '#694187',
        borderRadius: 15,
        paddingHorizontal: '5%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputText: {
        marginLeft: '5%',
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Mina-Regular',
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