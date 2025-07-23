import { ScrollView, View } from "react-native";
import ProductCard from "./ProductCard";


export default function ProductList({ products }) {
    return (
        <ScrollView>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </ScrollView>
    )
}