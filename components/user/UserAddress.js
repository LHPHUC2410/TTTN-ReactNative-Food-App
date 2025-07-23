import { useState } from "react";
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import User from "./User";
import Address from "./Address";


export default function UserAddress() {
    return (
        <><User /><Address /></>
    )
}

