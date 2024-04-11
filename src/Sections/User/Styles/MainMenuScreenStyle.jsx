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
        display: 'flex',
        alignItems: 'center',
        backgroundColor: "white",
        width: 322,
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
    },
    checkboxContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    checkbox: {
        width: 200,
        height: 30,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    checkboxIcon: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderRadius: 5,
    },
    titleText:{
        fontSize: 20,
        fontWeight:"600",
        marginLeft: 15,
        marginBottom: 10,
        color: primaryColor
    },
    checkboxText:{
        fontWeight:"600",
        marginLeft: 15,
    },
    borderFilder: {
        marginTop: 15,
        marginBottom: 15,
        width: 250,
        height: 1,
        backgroundColor: primaryColor,
    },
    inputSection: {
        display: 'flex',
        flexDirection: 'column',
    },
    inputContainers: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:"space-between",
        width: 200,
    },
    inputName:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
    },
    input:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 55,
        borderWidth: 1,
        borderRadius: 5,
    },
    inputText:{
        color: primaryColor,
        fontSize: 15,
        fontWeight: 'bold'
    },
    placeholderText: {
        color: primaryColor,
    },
    sortContent: {
        width,
        height: 225,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',        
    },
    sortTitle: {
        width,
        height: 60,
        fontFamily: 'Mina-Regular',
        fontSize: 20,
        color: primaryColor,
        textAlign: 'center',
        paddingTop: 15
    },
    sortButton: {
        height: 40,
        width,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        paddingHorizontal: 15
    },
    sortButtonChoosen: {
        borderBottomColor: primaryColor,
        borderBottomWidth: 2,
    },
    sortButtonText: {
        color: 'gray',
        fontFamily: 'Mina-Regular',
        fontSize: 15
    },
    sortButtonTextChoosen: {
        fontFamily: 'Mina-Bold',
        color: primaryColor
    }
});
