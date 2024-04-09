import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const purple = '#490e75';

export const styles = StyleSheet.create({
    body: {
        backgroundColor: '#c3c3dc',
        flex: 1, 
        alignItems: 'center',
    },

    form: {
        width: width - 20,
    },

    card: {
        backgroundColor: '#fff',
        height: height - 180,
        width: width - 20,
        marginVertical: 20,
        borderRadius: 20
    },

    header: {
        height: height /5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    headerTextBox: {
        flex: 1.2,
        backgroundColor: purple,
        marginVertical: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        alignContent: 'center',
        justifyContent: 'center'
    },

    stamp: {
        flex: 1,
        objectFit: 'contain',
        alignSelf: 'center',
        // marginRight: 10,
        marginVertical: 20,
        marginHorizontal: 10
        // margin: 20
    },

    title: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 25,
        fontFamily: 'Mina-Bold'
    },

    /* Form */
    inputBackground: {
        borderBottomWidth: 1,
        borderBottomColor: '#676e78',
        width: '85%',
        alignSelf: 'center',
        
    },

    input: {
        fontSize: 16,
        textAlignVertical: 'bottom',
        paddingHorizontal: 10
    },

    button: {
        width: width * 0.7,
        height: 50,
        backgroundColor: purple,
        borderRadius: 20,
        alignSelf: 'center',
        margin: 25,
        alignContent: 'center',
        justifyContent: 'center'
    }
});