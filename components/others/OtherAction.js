import { useNavigation } from "@react-navigation/native";
import { ScrollView, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { useAuth } from "../../context/AuthContext";


const menuItems = [
  { title: 'Hỗ trợ', icon: 'help-circle-outline', route: 'Support' },
  { title: 'Chính sách và thông tin', icon: 'document-text-outline', route: 'Policy' },
  { title: 'Tin tức', icon: 'newspaper-outline', route: 'News' },
  { title: 'Cài đặt', icon: 'settings-outline', route: 'Setting' },
];

export default function OtherAction() {
    const navigation = useNavigation();
    const {user,logout} = useAuth();

    return (
        <ScrollView style={styles.body}>
          {user && (
            <><TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("Coupon")}
          >
            <View style={styles.itemLeft}>
              <Icon name='pricetag-outline' size={22} color="#d40000" />
              <Text style={styles.itemText}>Ưu đãi của tôi</Text>
            </View>
            <Icon name="chevron-forward-outline" size={18} color="#ccc" />
          </TouchableOpacity><TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("MyOrder")}
          >
              <View style={styles.itemLeft}>
                <Icon name='reader-outline' size={22} color="#d40000" />
                <Text style={styles.itemText}>Danh sách đơn hàng</Text>
              </View>
              <Icon name="chevron-forward-outline" size={18} color="#ccc" />
            </TouchableOpacity><TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate("MyAddress")}
            >
              <View style={styles.itemLeft}>
                <Icon name='location-outline' size={22} color="#d40000" />
                <Text style={styles.itemText}>Địa chỉ giao hàng</Text>
              </View>
              <Icon name="chevron-forward-outline" size={18} color="#ccc" />
            </TouchableOpacity></>
          )}
        {menuItems.map((item, index) => (
            <TouchableOpacity
            key={index}
            style={styles.item}
            onPress={() => navigation.navigate(item.route)}
            >
            <View style={styles.itemLeft}>
                <Icon name={item.icon} size={22} color="#d40000" />
                <Text style={styles.itemText}>{item.title}</Text>
            </View>
            <Icon name="chevron-forward-outline" size={18} color="#ccc" />
            </TouchableOpacity>
        ))}
        {user &&
        <TouchableOpacity 
        onPress={() => {
          navigation.navigate("Login");
          logout();
        }}
        style= {styles.btnContainer}>
          <Text style= {styles.btnText}>Đăng xuất</Text>
        </TouchableOpacity>}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#d40000',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 20,
    position: 'relative',
  },
  closeBtn: {
    position: 'absolute',
    left: 15,
    top: 45,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
  },
  username: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  editBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  editText: {
    color: '#fff',
    fontSize: 14,
    marginRight: 4,
  },
  body: {
    paddingHorizontal: 15,
    marginTop: 10,
  },
  item: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 15,
    color: '#333',
  },
  btnContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: 'red',
    borderWidth: 1,
    alignSelf: "center",
    marginVertical: 5
  }
});
