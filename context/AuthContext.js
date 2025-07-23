import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { createContext, useContext, useEffect, useState } from "react";


const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        const loadUser = async () => {
            try {
                const json = await AsyncStorage.getItem("user")
                if (json) setUser(JSON.parse(json));
                console.log("load user");
            } catch (error) {
                console.log("Eroor loading User");
            } finally {
                setLoading(false);
            }
        }
        loadUser();
    }, []);


    const login = async (userData) => {
        setUser(userData);
        await AsyncStorage.setItem("user", JSON.stringify(userData));
        console.log(userData)
    }

    const logout = async () => {
        setUser(null);
        await AsyncStorage.removeItem("user");
        console.log("Remove user");
    }

    return (
    <AuthContext.Provider value={{user, login, logout, loading}}>
        {children}
    </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);