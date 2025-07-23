import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useAuth } from "../../context/AuthContext";

export default function Profile() {
  const { user, logout } = useAuth(); // 👈 Lấy user từ useAuth()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thông tin tài khoản</Text>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Họ tên:</Text>
        <Text style={styles.value}>{user?.name || "Chưa có tên"}</Text>

        <Text style={styles.label}>Số điện thoại:</Text>
        <Text style={styles.value}>{user?.phone || "Chưa có số điện thoại"}</Text>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
        <Text style={styles.logoutText}>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
    color: "#333",
  },
  infoBox: {
    width: "100%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    marginBottom: 30,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#555",
    marginTop: 10,
  },
  value: {
    fontSize: 18,
    color: "#111",
  },
  logoutButton: {
    backgroundColor: "#e53935",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
