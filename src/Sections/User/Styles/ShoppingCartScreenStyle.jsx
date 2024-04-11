import { StyleSheet, Dimensions } from "react-native";


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const primaryColor = '#411c5d';

export const styles = StyleSheet.create({
    body: {
        backgroundColor: '#c3c3dc',
        flex: 1, 
        alignItems: 'center',
    },
    mainContainer:{
        flexGrow: 1,
        alignItems: 'center',
    },
    payForCartButton:{
        backgroundColor: primaryColor,
        flexDirection: "row",
        width: width * 0.7,
        height: 65,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    payForCartText:{
        color: "white",
        fontSize: 28,
        fontWeight: "700"
    },
    cashImage:{
        width: 75,
        objectFit: 'contain',
        marginRight: 20,
    },
    cartProduct:{
        display: "flex",
        flexDirection: "row",
        height: 130,
        width: 385,
        borderColor: primaryColor,
        borderWidth: 3,
        borderRadius: 20,
        backgroundColor: "white",
        marginTop: 15
    },
    productImageContainer:{
        backgroundColor: "#d7d7d7",
        width: 130,
        height: 130,
        borderColor: primaryColor,
        borderWidth: 3,
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        left: -3,
        top: -3
    },
    productImage:{
        width: 110,
        height: 60,
    },
    productInfoContainer:{
        width: '65%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nameProductText:{
        color: primaryColor,
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 12,
    },
    sizeContainer:{
        height: 40,
        display: 'flex',
        flexDirection: 'row',
    },
    sizeText:{
        color: primaryColor,
        fontSize: 20,
    },
    priceContainer:{
        width: '112%',
        height: 40,
        backgroundColor: primaryColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: primaryColor,
        borderWidth: 4,
        borderRadius: 17,
        zIndex: -1,
        right: 10
    },
    trashContainer:{
        display: "flex",
        position: "absolute",
        width: 30,
        height: 30,
        right: 5,
        top: 4
    },
    trashIcon:{
        width: 30,
        height: 30,
    },
});
