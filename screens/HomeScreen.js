import { FlatList, ScrollView, Text, View } from "react-native";
import CategoryCard from "../components/category/CategoryCard";
import CategoryList from "../components/category/CategoryList";
import UserAddress from "../components/user/UserAddress";
import User from "../components/user/User";
import Address from "../components/user/Address";

const categories = [{
    id: 1,
    name: "Pizza",
    image: "https://content.jdmagicbox.com/v2/comp/chennai/m5/044pxx44.xx44.200602172602.w6m5/catalogue/kfc-periyar-nagar-jawahar-nagar-chennai-fast-food-weiayifzt2.jpg",
  },
  {
    id: 2,
    name: "Burger",
    image: "https://content.jdmagicbox.com/v2/comp/chennai/m5/044pxx44.xx44.200602172602.w6m5/catalogue/kfc-periyar-nagar-jawahar-nagar-chennai-fast-food-weiayifzt2.jpg",
  },
  {
    id: 3,
    name: "Salad",
    image: "https://content.jdmagicbox.com/v2/comp/chennai/m5/044pxx44.xx44.200602172602.w6m5/catalogue/kfc-periyar-nagar-jawahar-nagar-chennai-fast-food-weiayifzt2.jpg",
  },
  {
    id: 4,
    name: "Beverages",
    image: "https://content.jdmagicbox.com/v2/comp/chennai/m5/044pxx44.xx44.200602172602.w6m5/catalogue/kfc-periyar-nagar-jawahar-nagar-chennai-fast-food-weiayifzt2.jpg",
  },
    {
    id: 5,
    name: "Salad",
    image: "https://content.jdmagicbox.com/v2/comp/chennai/m5/044pxx44.xx44.200602172602.w6m5/catalogue/kfc-periyar-nagar-jawahar-nagar-chennai-fast-food-weiayifzt2.jpg",
  },
  {
    id: 6,
    name: "Beverages",
    image: "https://content.jdmagicbox.com/v2/comp/chennai/m5/044pxx44.xx44.200602172602.w6m5/catalogue/kfc-periyar-nagar-jawahar-nagar-chennai-fast-food-weiayifzt2.jpg",
  },
];

export default function HomeScreen() {
  return (
    <FlatList
      data={[]} 
      renderItem={null} 
      ListHeaderComponent={() => (
        <>
          <User />
          <Address isMain={true}/>
          <CategoryList categories={categories} />
        </>
      )}
    />
  );
}