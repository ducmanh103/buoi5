import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Trang chủ</Text>
            <Text style={styles.text}>Đăng nhập thành công 🎉</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => router.push("/")}
            >
                <Text style={styles.btnText}>Đăng xuất</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 10,
    },

    text: {
        fontSize: 16,
        marginBottom: 20,
    },

    button: {
        backgroundColor: "#1A1AFF",
        padding: 12,
        borderRadius: 8,
    },

    btnText: {
        color: "#fff",
        fontWeight: "600",
    },
});