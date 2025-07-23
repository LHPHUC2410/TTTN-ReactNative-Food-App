import { useEffect, useState } from "react";
import { Button, TextInput, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useAuth } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

export default function LoginForm({onPressRegister, onPressForgotPassword}) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("")
    const [error, setError] = useState("");
    const {login, user} = useAuth();
    const navigation = useNavigation();
    const handleLogin = ({username, password}) => {
        if(username === "0" && password === "1") {
            const fakeUser = {
                id: 1,
                name: "Lê Hồng Phúc",
                phone: username,
                };
            setError("Success")
            login(fakeUser);
        } else {
            setError("Unsuccess")
        }
    }

    const handleNotLogin = () => {
        navigation.navigate("Main")
    }

    useEffect(() => {
            if(user) {
            navigation.navigate("Main");
        }
        
    })

    return (
        <View style={styles.container}>
            <Text style= {styles.loginText}>Đăng nhập</Text>
            <TextInput
             style= {styles.input} 
             placeholder="Số điện thoại *"
             keyboardType="phone-pad"
             onChangeText={(text) => setUserName(text)}
             value={userName}
             />
            <TextInput 
            style= {styles.input} 
            placeholder="Mật khẩu *" 
            secureTextEntry={true} 
            onChangeText={(text) => setPassword(text)}
            value={password}
            />
            <View style= {styles.fpContainer}>
                <TouchableOpacity onPress={onPressRegister}>
                    <Text style= {styles.btnText}>Đăng ký ngay</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressForgotPassword}>
                    <Text style= {styles.btnText}>Quên mật khẩu</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
            onPress={() => handleLogin({username: userName, password: password})}
            style={[styles.button, { marginBottom: 10 }]}>
                <Text style= {styles.buttonText}>Đăng nhập</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => handleNotLogin()}
            style={styles.button}>
                <Text style= {styles.buttonText}>Đặt hàng không cần đăng nhập</Text>
            </TouchableOpacity>
            <Text>{error}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: "#fff"
        },
    fpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        marginBottom: 20,
    },
    loginText: {
        fontSize: 20,
        fontWeight: "bold",
    }, 
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
        fontSize: 16,
    },
    btnText: {
        color: 'red',
        fontSize: 16,
        fontWeight: "600"
    },
    button: {
        backgroundColor: 'red',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: "600"
    },
})