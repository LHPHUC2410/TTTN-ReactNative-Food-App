import { FlatList, View } from "react-native";
import CategoryCard from "./CategoryCard";

export default function CategoryList({ categories }) {
    return (
        <FlatList style={{padding: 10}}
            data={categories}
            renderItem={({item}) => <CategoryCard category={item} />}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            key={2} 
        />


    );
}
