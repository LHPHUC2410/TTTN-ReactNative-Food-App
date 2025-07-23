import { StyleSheet, Text, View } from "react-native";
import { useCart } from "../context/CartContext";
import ProductList from "../components/product/ProductList";
import CartList from "../components/cart/CartList";

export default function CartScreen() {
    const {cartItem, quantity} = useCart();
    console.log(quantity);
    return (
        <CartList cartList={cartItem}/>
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
