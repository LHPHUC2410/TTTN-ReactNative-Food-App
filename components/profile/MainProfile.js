import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useAuth } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";


export default function MainProfile() {
    const {user} = useAuth();
    const navigation = useNavigation();
    return (
        <>
        {user ? (
            <View style= {styles.container}>
                <Image 
                    style = {styles.userImage}
                    source= {{uri: 'https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg' }}
                />
                <Text style= {styles.userName}>{user && user.name ? user.name : "NONE"}</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("EditProfile");
                    }}
                    style= {styles.btnContainer}>
                    <Text style= {styles.btnText}>Chỉnh sửa tài khoản</Text>
                    <Ionicons style= {styles.btnIcon} name="arrow-forward"/>
                </TouchableOpacity>
            </View>
        ) : (
            <View style= {styles.container}>
            <Image 
                style = {styles.userImage}
                source= {{uri: 'https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg' }}
            />
            <TouchableOpacity
            onPress={() => {
                navigation.navigate("Login");
            }}
            style= {[styles.btnContainer, {marginTop: 5}]}>
                <Text style= {styles.btnText}>Đăng nhập</Text>
                <Ionicons style= {styles.btnIcon} name="arrow-forward"/>
            </TouchableOpacity>
        </View>
        )}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        alignItems: "center"
    }, 
    userImage: {
        width: 120,
        height: 120,
        borderRadius: 999,
        marginTop: 40
    },
    userName: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        paddingVertical: 10
    },
    btnContainer: {
        flexDirection: 'row',
        alignItems: "center",
        paddingBottom: 20
    },
    btnText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "500"
    },
    btnIcon: {
        padding: 6,
        backgroundColor: "#fff",
        borderRadius: 999,
        marginLeft: 6,
        color: "red"
    }
})