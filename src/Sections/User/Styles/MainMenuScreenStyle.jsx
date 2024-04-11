import { StyleSheet, Dimensions } from "react-native";

const primaryColor = '#411c5d';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    body: {
        backgroundColor: '#c3c3dc',
        flex: 1, 
        alignItems: 'center',
    },
    mainContainer:{
        flexGrow: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        rowGap: 15,
        columnGap: 15,
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        padding: 10,
        paddingBottom: 20
    },
    productContainer:{
        backgroundColor: "#d7d7d7",
        width: (width - 35) /2,
        height: 200,
        borderColor: primaryColor,
        borderWidth: 2,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    productImage:{
        width: 150,
        height: 100,
        marginBottom: 50,
    },
    infoProductContainer:{
        backgroundColor: "white",
        width: "103%",
        height: 60,
        borderColor: primaryColor,
        borderWidth: 2,
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: -4, 
    },
    infoProductText:{
        color: primaryColor,
        fontSize: 20,
        fontWeight: "bold"
    },
    backgroundFilter:{
        width: "100%",
        height: "100%",
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    filterContainer:{
        backgroundColor: "white",
        width: "80%",
        height: "80%",
        borderColor: primaryColor,
        borderWidth: 3,
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
    },
    filterContentContainer:{
        backgroundColor: "white",
        width: "95%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonFilter:{
        backgroundColor: primaryColor,
        width: 250,
        height: 45,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    textButtonFilter:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
    },
    closeImage:{
        width: 60,
        height: 40,
        right: -65,
        marginTop: 5,
        marginBottom: 5,
        marginRight: 5,
    }
});
