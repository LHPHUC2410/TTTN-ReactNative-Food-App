import { View, Text } from "react-native";
import LoginForm from "../components/auth/LoginForm";
import { useState } from "react";
import RegisterForm from "../components/auth/RegisterForm";
import ForgotPasswordForm from "../components/auth/ForgotPasswordForm";
import { useAuth } from "../context/AuthContext";
import Profile from "../components/auth/Profile";


export default function ProfileScreen() {
  const [screen, setScreen] = useState("login")
  const {user} = useAuth();

  if (user) {
    return (
      <Profile />
    )
  }
  return (
    <View style={{ flex: 1 }}>
      {screen === 'login' && (
        <LoginForm onPressRegister={() => setScreen("register")}
        onPressForgotPassword={() => setScreen("forgot")}
        />
      )}
      {screen === 'register' && (
        <RegisterForm onBack={() => setScreen("login")}/>
      )}
      {screen === 'forgot' && (
        <ForgotPasswordForm onBack={() => setScreen("login")}/>
      )}
    </View>
  );
}