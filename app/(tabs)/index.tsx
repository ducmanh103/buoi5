import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { router } from "expo-router";

export default function SignIn() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const validatePhone = (value: string) => {
    const regex = /^(0|\+84)[0-9]{9}$/;
    return regex.test(value);
  };

  const formatPhone = (text: string) => {
    const cleaned = text.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

    if (match) {
      return [match[1], match[2], match[3]].filter(Boolean).join(" ");
    }

    return text;
  };

  const handleChange = (text: string) => {
    const formatted = formatPhone(text);
    setPhone(formatted);

    const raw = formatted.replace(/\s/g, "");

    if (!validatePhone(raw) && raw.length > 0) {
      setError("Số điện thoại không hợp lệ");
    } else {
      setError("");
    }
  };

  const handleContinue = () => {
    const raw = phone.replace(/\s/g, "");

    if (!validatePhone(raw)) {
      setError("Số điện thoại không đúng định dạng");

      Alert.alert(
        "Thông báo",
        "Số điện thoại không đúng định dạng. Vui lòng nhập lại",
        [{ text: "OK" }]
      );

      return;
    }

    // chuyển sang Home
    router.push("/home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Đăng nhập</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Nhập số điện thoại</Text>

        <Text style={styles.sub}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản OneHousing Pro
        </Text>

        <TextInput
          placeholder="Nhập số điện thoại của bạn"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={handleChange}
          style={styles.input}
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.btnText}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    paddingHorizontal: 16,
    paddingTop: 50,
  },

  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
  },

  label: {
    fontSize: 18,
    fontWeight: "600",
  },

  sub: {
    marginTop: 4,
    color: "#666",
    fontSize: 14,
    marginBottom: 12,
  },

  input: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
    fontSize: 16,
  },

  error: {
    color: "red",
    marginTop: 6,
  },

  button: {
    marginTop: 24,
    backgroundColor: "#1A1AFF",
    padding: 16,
    borderRadius: 10,
  },

  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
});