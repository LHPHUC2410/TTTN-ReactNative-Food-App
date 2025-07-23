import { TouchableOpacity } from "react-native";
import { View, Image, Text, StyleSheet } from "react-native";

export default function ProductCard({ product }) {
    return (
        <View>
            <View style={styles.cart}>
                <Image 
                style={styles.cartImage}
                source={{ uri: product.image }}
                />
                <View style={styles.cartInfo}>
                    <Text style= {styles.name}>{product.name}</Text>
                    <View style= {styles.priceContainer}>
                        <Text style= {styles.salePrice}>{product.salePrice}đ</Text>
                        <Text style= {styles.originalPrice}> {product.originalPrice}đ</Text>
                    </View>
                    <Text style= {styles.description}>{product.description}</Text>
                    <TouchableOpacity style= {styles.button}>
                        <Text style= {styles.buttonText}>Thêm</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cart: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        marginHorizontal: 10,
        marginVertical: 5,
    },
    cartImage: {
        width: 90,
        height: 90,
        borderRadius: 6,
    },
    cartInfo: {
        justifyContent: "space-between",   
        marginLeft: 10,
        flex: 1,
    },
    name: {
        fontWeight: "bold",
        fontSize: 16,
    },
    priceContainer: {
        paddingVertical: 4,
        flexDirection: "row",
    },
    salePrice: {
        fontWeight: "bold",
        fontSize: 16,
    },
    originalPrice: {
        paddingLeft: 8,
        fontSize: 14,
        textDecorationLine: "line-through",
        color: "#999",
        marginTop: 2,
    },
    description: {
        color: "#666",
        marginBottom: 4,
    },
    button: {
        backgroundColor: "red",
        paddingHorizontal: 12,
        paddingVertical: 6,
        alignSelf: "flex-end",
        borderRadius: 4,
        marginRight: 4,
    },
    buttonText: {
        color: "#fff",
        fontWeight: 600,
    },
})