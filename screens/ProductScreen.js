import { Text, View } from "react-native";
import ProductCard from "../components/product/ProductCard";
import ProductList from "../components/product/ProductList";


const products = [{
  id: 1,
  name: "Combo Vui Đỉnh",
  salePrice: "170.000",
  originalPrice: "190.000",
  image: "https://upload.urbox.vn/strapi/Gallery_KFC_4_c9fb78435f.jpg",
  description:
    "3 Miếng Gà + 1 Mì Ý Gà Viên + 1 Khoai Tây Chiên (vừa) + 2 Ly Pepsi (tiêu chuẩn)",
  },
  {
    id: 2,
    name: "Gà Rán Giòn Tan",
    salePrice: "50.000",
    originalPrice: "60.000",
    image: "https://upload.urbox.vn/strapi/Gallery_KFC_4_c9fb78435f.jpg",
    description:
      "Miếng Gà Rán Giòn Tan, Thơm Ngon, Đậm Đà Hương Vị KFC",
  },
  {
    id: 3,
    name: "Gà Rán Giòn Tan",
    salePrice: "50.000",
    originalPrice: "60.000",
    image: "https://upload.urbox.vn/strapi/Gallery_KFC_4_c9fb78435f.jpg",
    description:
      "Miếng Gà Rán Giòn Tan, Thơm Ngon, Đậm Đà Hương Vị KFC",
  },
  {
    id: 4,
    name: "Gà Rán Giòn Tan",
    salePrice: "50.000",
    originalPrice: "60.000",
    image: "https://upload.urbox.vn/strapi/Gallery_KFC_4_c9fb78435f.jpg",
    description:
      "Miếng Gà Rán Giòn Tan, Thơm Ngon, Đậm Đà Hương Vị KFC",
  },
  {
    id: 5,
    name: "Gà Rán Giòn Tan",
    salePrice: "50.000",
    originalPrice: "60.000",
    image: "https://upload.urbox.vn/strapi/Gallery_KFC_4_c9fb78435f.jpg",
    description:
      "Miếng Gà Rán Giòn Tan, Thơm Ngon, Đậm Đà Hương Vị KFC",
  },
];

export default function ProductScreen() {
  return (
      <ProductList products={products}/>
  );
}