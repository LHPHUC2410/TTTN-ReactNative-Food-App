import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './context/AuthContext';
import SlackNavigator from './navigation/SlackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <SlackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
} 