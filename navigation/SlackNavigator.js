import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainNavigation from "./MainNavigation";
import LoginForm from "../components/auth/LoginForm";
import CouponScreen from "../screens/CouponScreen";
import { StyleSheet, TouchableOpacity, View , Text} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import EditProfile from "../components/profile/EditProfile";
import StoresScreen from "../screens/StoresScreen";


 const Slack = createNativeStackNavigator();

 const CustomHeader = ({navigation, headerTitle}) => {
    return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      <View style= {{flex: 1, alignItems: 'center'}}>
      <Text style={styles.headerTitle}>{headerTitle}</Text>
      </View>
    </View>
  );
 }

 const getTitle = (routeName) => {
    switch(routeName) {
        case 'Coupon': return 'Ưu đãi của tôi';
        case 'EditProfile': return 'Chỉnh sửa tài khoản';
        case 'Setting': return 'Cài đặt';
        case "Store": return "Cửa hàng";
    }
 }
 
 export default function SlackNavigator() {
    return (
        <Slack.Navigator>
            <Slack.Screen name="Login" 
            component={LoginForm} options=
            {{headerShown: false, gestureEnabled: false}} />
            <Slack.Screen name="Main" component={MainNavigation} options={{headerShown: false,gestureEnabled: false}}/>
            <Slack.Screen name="Coupon" 
            options={({navigation, route}) => ({
                header: () => <CustomHeader navigation={navigation} headerTitle={getTitle(route.name)} />
            })}
            component={CouponScreen} />
            <Slack.Screen name="EditProfile" 
            options={({navigation, route}) => ({
                header: () => <CustomHeader navigation={navigation} headerTitle={getTitle(route.name)} />
            })}
            component={EditProfile} />
            <Slack.Screen name="Setting" 
            options={({navigation, route}) => ({
                header: () => <CustomHeader navigation={navigation} headerTitle={getTitle(route.name)} />
            })}
            component={EditProfile} />
            <Slack.Screen name="Store" 
            options={({navigation, route}) => ({
                header: () => <CustomHeader navigation={navigation} headerTitle={getTitle(route.name)} />
            })}
            component={StoresScreen} />
        </Slack.Navigator>
    )
 }

 const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 30,
    paddingBottom: 10,
    backgroundColor: '#d50000',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
},
});