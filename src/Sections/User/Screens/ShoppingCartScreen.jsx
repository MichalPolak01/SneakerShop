import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from '../Styles/ShoppingCartScreenStyle';
import TopNavigationPanel from '../../Navigation/Panels/Top/TopNavigationCleanPanel';
import BottomNavigationPanel from '../../Navigation/Panels/Bottom/BottomNavigationUserPanel';
import { CartList } from '../Models/Product';

export default function ShoppingCartScreen() {

    return (
        <View style={styles.body}>
            <TopNavigationPanel/>
            <ScrollView contentContainerStyle={styles.mainContainer}>
                <View>
                    {CartList.map((product) => (<CartItem key={product.id} product={product} />))}
                </View>      
                
                <TouchableOpacity style={styles.payForCartButton}>
                    <Image style={styles.cashImage} source={require('../../../../assets/Images/Menu/CashIcon.png')} />
                    <Text style={styles.payForCartText}>{SumCart(CartList)} zł</Text>
                </TouchableOpacity>
            </ScrollView>
            <BottomNavigationPanel/>
        </View>
    )
}

function CartItem({ product }) {
    return (
        <View style={styles.cartProduct}>
                    <View style={styles.productImageContainer}>
                        <Image style={styles.productImage} source={product.image} />
                    </View>
                    <View style={styles.productInfoContainer}>
                        <Text style={styles.nameProductText}>{product.name}</Text>
                        <View style={styles.sizeContainer}>
                            <Text style={styles.sizeText}>Rozmiar</Text>
                            <Text style={{...styles.sizeText, fontWeight:'bold', fontSize: 21}}>  41</Text>
                        </View>
                        <View style={styles.priceContainer}>
                            <Text style={{ ...styles.payForCartText, fontSize: 20}}>{product.price} zł</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.trashContainer} >
                        <Image style={styles.trashIcon} source={require('../../../../assets/Images/Menu/TrashIcon.png')} />
                    </TouchableOpacity>
        </View>
    );
}

function SumCart(CartList){
    let sum = 0;
    for(let i=0 ; i< CartList.length; i++){
        sum += CartList[i].price;
    }
    return sum;
}