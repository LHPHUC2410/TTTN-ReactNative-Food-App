import { NavigationContainer } from "@react-navigation/native";
import MainTabNavigator from "./MainTabNavigator";
import { useAuth } from "../context/AuthContext";
import ProfileScreen from "../screens/ProfileScreen";
import { CartProvider } from "../context/CartContext";

export default function MainNavigation() {
    const {user} = useAuth();
    return (
        <CartProvider>
            <MainTabNavigator /> 
        </CartProvider>
    )
}