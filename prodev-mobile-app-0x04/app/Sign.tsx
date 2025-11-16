import React from "react";
import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { styles } from "@/styles/_joinstyle"; // Make sure this path is correct

export default function Sign() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.iconsection}>
          <Ionicons name="arrow-back" size={25} onPress={() => router.back()} />
          <Image source={require("../assets/images/Logo.png")} />
        </View>

        <Text style={styles.titleText}>Sign in to your Account</Text>

        <View style={styles.formGroup}>
          <Text>Email</Text>
          <TextInput style={styles.formControl} keyboardType="email-address" />

          <Text>Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput style={styles.passwordControl} secureTextEntry />
            <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
          </View>
        </View>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.push("/")} // Navigate to home page
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <Text
          style={styles.signupSubTitleText}
          onPress={() => router.push("/join")} // Navigate to Join page
        >
          Do not have an account? Join now
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
