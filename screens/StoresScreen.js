import { View, Text, StyleSheet } from "react-native";
import Address from "../components/user/Address";

export default function StoresScreen() {
    return (
        <View >
            <Address isMain={false}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})