import { TextInput, TouchableOpacity, View , Text, StyleSheet} from "react-native";
import BackButton from "../backButton";

export default function ForgotPasswordForm({onBack}) {
    return (
        <View style={styles.container}>
            <BackButton onPress={onBack} />
            <Text style= {styles.text}>Quên mật khẩu</Text>
            <TextInput
                style={styles.input}
                placeholder="Vui lòng nhập số điện thoại"
                keyboardType="number-pad" />
            <TouchableOpacity style={styles.button}>
                <Text style= {styles.buttonText}>Gửi</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 60,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
        fontSize: 16,
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 50,
        alignSelf: 'center',
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600'
    },
})