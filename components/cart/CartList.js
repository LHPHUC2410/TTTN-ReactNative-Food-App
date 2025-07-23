import { FlatList, View } from "react-native";
import CartItem from "./CartItem";

export default function CartList({ cartList }) {
    return (
        <FlatList style={{padding: 10}}
            data={cartList}
            renderItem={({item}) => < CartItem product={item} />}
            keyExtractor={(item) => item.id.toString()}
        />
    );
}
