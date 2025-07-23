import { Picker } from "@react-native-picker/picker";
import { use, useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View, Text } from "react-native";

export default function EditProfile() {
    const [email, setEmail] = useState("lhphuc.2410@gmail.com")
    return (
        <View style = {styles.container}>
            <View style= {styles.nameContainer}>
                <TextInput 
                style= {[styles.inputContainer, {flex: 1, marginRight: 5}]} 
                value="Lê"
                placeholder="Họ *"
                />
                <TextInput 
                style= {[styles.inputContainer, {flex: 1, marginLeft: 5}]} 
                value="Hồng Phúc"
                paddingHorizontal= "Tên *"
                />
            </View>
            <TextInput
             editable={false} 
             style= {[styles.inputContainer, {backgroundColor: '#ffebb2'}]} 
             value="0869738540"
             />
            <TextInput 
            style= {styles.inputContainer} 
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Email"
            />
            <TextInput style= {styles.inputContainer} value="24/10/2003"></TextInput>
            {/* <Picker>
                <Picker.Item label="Nam" value="Male" />
                <Picker.Item label="Nữ" value="Female" />
            </Picker> */}
            <TextInput style= {styles.inputContainer} value="Nam"></TextInput>
            <TouchableOpacity style= {styles.btnContainer}>
                <Text style= {styles.btnText}>Cập nhật</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#ffebb2',
    },
    nameContainer: {
        flexDirection: 'row',
    },
    inputContainer: {
        padding: 10,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "gray", 
        backgroundColor: "#fff",
        marginVertical: 10
    },
    btnContainer: {
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 40,
        alignSelf: "center",
        borderRadius: 5,
        marginTop: 20
    },
    btnText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "600"
    }
})