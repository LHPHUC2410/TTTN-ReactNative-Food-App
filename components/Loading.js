import { ActivityIndicator, Modal, View, Text, StyleSheet } from "react-native"

const Loading = ({
    visible = true,
    message = 'Loading...',
    spinnerColor = '#fff',
    backgroundColor = 'rgba(0, 0, 0, 0.5)',
}) => {
    return (
        <Modal
        transparent={true}
        visible={visible}
        animationType="fade"
        statusBarTranslucent={true}>
            <View style={[styles.overlay, { backgroundColor }]}>
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color={spinnerColor} />
                    <Text> {message}</Text>
                </View>
            </View>     
        </Modal>
    )
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingContainer: {
        padding: 20,
        borderRaius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 200,
    }, 
    message: {
        marginTop: 12,
        color: '#fff',
        fontsize: 16,
        textAlign: 'center',

    }
}
)

export default Loading;