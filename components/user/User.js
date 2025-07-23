import { useState } from "react";
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useAuth } from "../../context/AuthContext";


export default function User() {
    const {user} = useAuth();
    return (
        <View style= {styles.container}>
            <View style= {styles.userContainer}>
            {/* ---User--- */}
                <Image 
                    style = {styles.userImage}
                    source= {{uri: 'https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg' }}
                />
                <Text style={styles.userName}>{user && user.name ? user.name : "Khach hang"}</Text>
                {user && <Ionicons style= {styles.notiIcon} name="notifications" />}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
    },
    userContainer: {
        height: 'auto',
        flexDirection: "row",
        padding: 20,
        alignItems: 'center'
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginRight: 20,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        justifyContent: 'center',
        color: '#fff'
    },
    addressContainer: {
        backgroundColor: '#fff',
        borderRadius: 6,
        marginHorizontal: 10
    },
    shippingTypeContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 1
    },
    shippingContainer: {
        padding: 5,
        alignItems: 'center'
    },
    shippingIcon: {
        fontSize: 16,
        fontWeight: '500',
        paddingBottom: 5
    },
    shippingText: {
        fontSize: 16,
        fontWeight: 500
    },
    address: {
        flexDirection: 'row',
        alignItems: "center",
        fontSize: 18,
        paddingHorizontal: 10,
        justifyContent: "space-between",
        paddingVertical: 10
    },
    addressIcon: {
        color: 'red',
        paddingRight: 5 ,
        fontSize: 16,
    },
    addressText: {
        width: '85%',
        fontSize: 16,

    },
    editIcon: {
        fontSize: 16,
    },
    selected: {
        color: 'red',
        fontWeight: 'bold',
    },
    notiIcon: {
        color: '#fff',
        fontSize: 24,
        marginLeft: 'auto'
    }
})