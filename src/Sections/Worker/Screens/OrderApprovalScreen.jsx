import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import axios from 'axios';
import { styles } from '../Styles/OrderApprovalScreenStyle';
import TopNavigationPanel from '../../Navigation/Panels/Top/TopNavigationSortPanel';
import BottomNavigationPanel from '../../Navigation/Panels/Bottom/BottomNavigationWorkerPanel';
import * as Keychain from 'react-native-keychain';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Animated, { FadeIn, FadeInDown, FadeInUp } from 'react-native-reanimated';
import LoadingModal from '../../Login/Components/LoadingModal';

export default function OrderApprovalScreen() {
    const [orders, setOrders] = useState([]);
    const [sortOption, setSortOption] = useState('desc');
    const [loading, setLoading] = useState(true);
    const [showSort, setShowSort] = useState(false);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        const credentials = await Keychain.getGenericPassword();
        if (!credentials) {
            throw new Error('No credentials stored');
        }
        const parsedData = JSON.parse(credentials.password);
        const token = parsedData.token;

        try {
            setLoading(true);
            const response = await axios.get('https://sneakers-api.fly.dev/api/order',{
                headers: { 
                    Authorization: `Bearer ${token}` 
                }
            });
            setOrders(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching orders:', error);
            setLoading(false);
        }
    };

    const handleSort = (option) => {
        setSortOption(option);
        const sortedOrders = [...orders].sort((a, b) => {
            if (option === 'asc') {
                return new Date(a.date) - new Date(b.date);
            } else {
                return new Date(b.date) - new Date(a.date);
            }
        });
        setOrders(sortedOrders);
    };

    const toggleSort = () => {
        setShowSort(!showSort);
    };

    return (
        <View style={styles.body}>
            <TopNavigationPanel onPressSort={toggleSort} />
            {showSort && 
                <Animated.View entering={FadeInUp.duration(1000).springify()} style={styles.sortContent}>
                    <TouchableOpacity style={[styles.sortButton, sortOption === 'asc' && styles.sortButtonChoosen]} onPress={() => handleSort('asc')}>
                        <Animated.Text entering={FadeInUp.duration(1000).springify().delay(100)} style={[styles.sortButtonText, sortOption === 'asc' && styles.sortButtonTextChoosen]}>Sort by Date Ascending</Animated.Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.sortButton, sortOption === 'desc' && styles.sortButtonChoosen]} onPress={() => handleSort('desc')}>
                        <Animated.Text entering={FadeInUp.duration(1000).springify().delay(500)}  style={[styles.sortButtonText, sortOption === 'desc' && styles.sortButtonTextChoosen]}>Sort by Date Descending</Animated.Text>
                    </TouchableOpacity>
                </Animated.View>
            }
            <ScrollView contentContainerStyle={styles.mainContainer}>
                {!loading ? 
                    orders.map((order, index) => (
                        <OrderItem key={index} order={order} />
                    )) : 
                    <LoadingModal />}
            </ScrollView>
            <BottomNavigationPanel />
        </View>
    );
}

function OrderItem({ order }) {
    const totalPrice = order.stocks.reduce((sum, stock) => sum + stock.quantity * stock.product.price, 0);

    return (
        <Animated.View entering={FadeInUp.duration(1000).springify()} style={styles.setContainer}>
            <Animated.Text entering={FadeInUp.duration(1000).springify().delay(100)} style={styles.contactText}><Text style={styles.contactTextLabel}>Order Date:</Text> {new Date(order.date).toUTCString()}</Animated.Text>
            <View style={styles.contactContainer}>
                <Animated.Text entering={FadeInUp.duration(1000).springify().delay(400)} style={styles.contactText}><Text style={styles.contactTextLabel}>Name:</Text> {order.contact.name} {order.contact.lastname}</Animated.Text>
                <Animated.Text entering={FadeInUp.duration(1000).springify().delay(700)} style={styles.contactText}><Text style={styles.contactTextLabel}>Phone:</Text> {order.contact.phoneNumber}</Animated.Text>
                <Animated.Text entering={FadeInUp.duration(1000).springify().delay(1000)} style={styles.contactText}><Text style={styles.contactTextLabel}>Address:</Text> {order.contact.street} {order.contact.streetNumber}, {order.contact.city}, {order.contact.postalCode}, {order.contact.country}</Animated.Text>
            </View>
            <Animated.View entering={FadeInUp.duration(1200).springify()} style={{ marginTop: 25 }}>
                {order.stocks.map((stock, index) => (
                    <CartItem key={index} stock={stock} />
                ))}
            </Animated.View>
            {/* <Text style={styles.totalPrice}>Total Price: {totalPrice.toFixed(2)} zł</Text> */}
            <Animated.View entering={FadeInUp.duration(1000).springify().delay(2300)}>
                <TouchableOpacity style={styles.acceptButton}>
                    <Ionicons name={'checkmark-circle-outline'} size={38} color= {'#fff'} style={styles.IconsSize} />
                    <Text style={styles.acceptText}> Shipped</Text>
                </TouchableOpacity>
            </Animated.View>
            {/* <TouchableOpacity style={styles.trashContainer}>
                <Image style={styles.trashIcon} source={require('../../../../assets/Images/Menu/TrashIcon.png')} />
            </TouchableOpacity> */}
        </Animated.View>
    );
}

function CartItem({ stock }) {
    return (
        <Animated.View entering={FadeInUp.duration(1000).springify().delay(1200)} style={styles.cartProduct}>
            <Animated.View entering={FadeInUp.duration(1000).springify()} style={styles.productImageContainer}>
                <Image style={styles.productImage} source={{ uri: stock.product.image }} />
            </Animated.View>
            <Animated.View entering={FadeInUp.duration(1000).springify().delay(1400)} style={styles.productInfoContainer}>
                <Animated.Text entering={FadeInUp.duration(1000).springify().delay(1600)} style={styles.nameProductText}>{stock.product.producer} {stock.product.model}</Animated.Text>
                <Animated.Text entering={FadeInUp.duration(1000).springify().delay(1800)} style={styles.sizeText}><Text style={styles.contactTextLabel}>Size:</Text> {stock.product.size}</Animated.Text>
                <Animated.Text entering={FadeInUp.duration(1000).springify().delay(2000)} style={styles.quantityText}><Text style={styles.contactTextLabel}>Quantity:</Text> {stock.quantity}</Animated.Text>
                {/* <Text style={styles.priceText}>{(stock.quantity * stock.product.price).toFixed(2)} zł</Text> */}
            </Animated.View>
        </Animated.View>
    );
}











// import React from 'react';
// import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
// import { styles } from '../Styles/OrderApprovalScreenStyle';
// import TopNavigationPanel from '../../Navigation/Panels/Top/TopNavigationCleanPanel';
// import BottomNavigationPanel from '../../Navigation/Panels/Bottom/BottomNavigationWorkerPanel';
// import { ShopList } from '../../User/Models/Product';

// export default function OrderApprovalScreen() {

//     return (
//         <View style={styles.body}>
//             <TopNavigationPanel/>
//             <ScrollView contentContainerStyle={styles.mainContainer}>
//                 {ShopList.map((set, index) => ( 
//                     <SetItem key={index} products={set.products} />
//                 ))}
//             </ScrollView>
//             <BottomNavigationPanel/>
//         </View>
//     )
// }

// function SetItem({ products }) {
//     return (
//         <View style={styles.setContainer}>
//             <View style={{marginTop: 25}}>
//                 {products.map((product, index) => ( 
//                     <CartItem key={index} product={product} /> 
//                 ))}
//             </View>
//             <TouchableOpacity style={styles.acceptButton}>
//                  <Image style={styles.acceptImage} source={require('../../../../assets/Images/Worker/AcceptShipIcon.png')} />
//                  <Text style={styles.acceptText}> Shipped</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.trashContainer}>
//                 <Image style={styles.trashIcon} source={require('../../../../assets/Images/Menu/TrashIcon.png')} />
//             </TouchableOpacity>
//         </View>
//     );
// }

// function CartItem({ product }) {
//     return (
//         <View style={styles.cartProduct}>
//             <View style={styles.productImageContainer}>
//                 <Image style={styles.productImage} source={product.image} />
//             </View>
//             <View style={styles.productInfoContainer}>
//                 <Text style={styles.nameProductText}>{product.name}</Text>
//                 <View style={styles.sizeContainer}>
//                     <Text style={styles.sizeText}>Rozmiar</Text>
//                     <Text style={{...styles.sizeText, fontWeight: "bold"}}>  41</Text>
//                 </View>
//                 <View style={styles.priceContainer}>
//                     <Text style={styles.acceptText}>{product.price.toFixed(2)} zł</Text>
//                 </View>
//             </View>
//         </View>
//     );
// }
