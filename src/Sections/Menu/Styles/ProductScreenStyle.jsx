import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');
const squareSize = width * 0.65;
const imageSize = width * 0.60;

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
        width: 411 // Później do zmiany bo belka się buguje
    },
    productContainer:{
        backgroundColor: "#d7d7d7",
        width: squareSize+50,
        height: squareSize,
        borderColor: primaryColor,
        borderWidth: 3,
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    productImage:{
        width: imageSize+50,
        height: imageSize,
    },
    categoryText:{
        color: primaryColor,
        fontSize: 16,
        marginBottom: 3,
    },
    nameProductText:{
        color: primaryColor,
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 15,
    },
    sizeProductContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 13,
        height: 50
    },
    sizeProductText:{
        color: primaryColor,
        fontSize: 20,
        fontWeight: "bold"
    },
    sizeSelectorContainer:{
        backgroundColor: "#d7d7d7",
        width: 30,
        height: 30,
        marginLeft: 18,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sizeSelectorValue:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    addProductButton:{
        backgroundColor: primaryColor,
        flexDirection: "row",
        width: 250,
        height: 65,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20,
    },
    addProductText:{
        color: "white",
        fontSize: 28,
        fontWeight: "700"
    },
    shopingCartImage:{
        width: 45,
        height: 45,
        marginRight: 20,
    },
    descriptionContainer:{
        width: "85%",
    }
});
