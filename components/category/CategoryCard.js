import { useNavigation } from "@react-navigation/native";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function CategoryCard({category}) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity 
        style = {{flex: 1}}
        onPress={() => {
            navigation.navigate("Product")
        }}>
        <View style={styles.cardContainer}>
            <Image
                style={styles.image}
                source = {{uri: category.image}}
            />
            <Text style= {styles.text}> {category.name}</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 4,
        flex: 1,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        flex: 1,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: 160,
        borderTopEndRadius: 4,
        borderTopStartRadius: 4,
    },
    text: {
        padding: 6,
        fontWeight: 'bold',
        fontSize: 16,
    }
})