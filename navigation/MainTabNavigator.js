import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import CartScreen from "../screens/CartScreen";
import NotificationScreen from "../screens/Notification";
import { StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";
import ProductScreen from "../screens/ProductScreen";
import { useCart } from "../context/CartContext";
import OthersScreen from "../screens/OthersScreen";

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {

    const [unreadNotifications, setUnreadNotifications] = useState(5); 
    const {quantity} = useCart();
    return (
        <Tab.Navigator 
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'gray',
                tabBarIcon: ({color, size}) => {
                    let iconName;
                    if (route.name === "Home") {
                        iconName = "home";
                    }
                    else if (route.name === "Product") {
                        iconName = "restaurant";
                    }
                    else if (route.name === "Profile") {
                        iconName = "person-circle";
                    }
                    else if (route.name === "Cart") {
                        iconName = "cart";
                    }else if (route.name === "Others") {
                        iconName = "menu";                      
                    }
                    if (route.name === "Cart" && quantity> 0) {
                        return (
                            <View>
                                <Ionicons name={iconName} size={size} color={color} />
                                <View style={styles.badge}>
                                    <Text style={styles.badgeText}>{quantity}</Text>
                                </View>
                            </View>
                        );
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                }
            })}
        >
            <Tab.Screen name="Home" options={{tabBarLabel: "Trang chủ"}} component={HomeScreen}/>
            <Tab.Screen name="Product" options={{tabBarLabel: "Sản phẩm"}} component={ProductScreen} />
            <Tab.Screen name = "Cart" options={{tabBarLabel: "Giỏ hàng"}} component={CartScreen} />
            <Tab.Screen name="Profile" options={{tabBarLabel: "Thông tin"}} component={ProfileScreen} />
            <Tab.Screen name="Others" options={{tabBarLabel: "Thêm"}} component={OthersScreen} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    badge: {
    position: 'absolute',
    top: -4,
    right: -10,
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 5,
    minWidth: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
})