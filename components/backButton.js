import { TouchableOpacity, Text, StyleSheet } from "react-native";
import IonIcons from 'react-native-vector-icons/Ionicons';

export default function BackButton({ onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <IonIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        top: 25,
        left: 10,
        padding: 8,
        backgroundColor: 'red',
        borderRadius: 50,
    },
});