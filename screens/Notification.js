import { useFocusEffect } from "@react-navigation/native";
import { View , Text, StyleSheet} from "react-native";
import React from "react";

export default function NotificationScreen({ onReadNotification }) {
    useFocusEffect(
        React.useCallback(() => {
            onReadNotification();
        }, [onReadNotification])
    )

    return (
        <View style={styles.container}>
            <Text> Notification Screen </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})