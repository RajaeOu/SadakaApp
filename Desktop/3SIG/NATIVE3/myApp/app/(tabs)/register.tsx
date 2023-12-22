import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { MaterialIcons, Ionicons, AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const signUpNewUser = () => {
    // Vérifier si le mot de passe et la confirmation sont identiques
    if (password !== confirmPassword) {
      Alert.alert("Password Mismatch", "Please make sure the passwords match");
      return;
    }

    // Logique d'inscription ici

    Alert.alert(
      "Registration Successful",
      "Please check your email for confirmation"
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
      <View style={{ marginTop: 50 }}>
        <Text style={{ fontSize: 20, textAlign: "center", fontWeight: "bold" }}>
          SADAKA App
        </Text>
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 12,
              color: "red",
            }}
          >
            Register to your account
          </Text>
        </View>

        <View style={{ marginTop: 70 }}>
          <View style={styles.inputContainer}>
            <Ionicons name="person" size={24} color="gray" style={styles.icon} />
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              style={styles.input}
              placeholder="Enter your Name"
            />
          </View>

          <View style={styles.inputContainer}>
            <MaterialIcons
              name="email"
              size={24}
              color="gray"
              style={styles.icon}
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
              placeholder="Enter your Email"
            />
          </View>

          <View style={styles.inputContainer}>
            <AntDesign name="lock1" size={24} color="black" style={styles.icon} />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={styles.input}
              placeholder="Enter your Password"
              secureTextEntry
            />
          </View>

          <View style={styles.inputContainer}>
            <AntDesign name="lock1" size={24} color="black" style={styles.icon} />
            <TextInput
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry
            />
          </View>

          <View style={styles.inputContainer}>
            <MaterialIcons
              name="location-city"
              size={24}
              color="gray"
              style={styles.icon}
            />
            <TextInput
              value={city}
              onChangeText={(text) => setCity(text)}
              style={styles.input}
              placeholder="Enter your City"
            />
          </View>
        </View>

        <Pressable
          onPress={signUpNewUser}
          style={styles.registerButton}
        >
          <Text style={styles.buttonText}>Register</Text>
        </Pressable>

        <Pressable
          onPress={() => router.replace("/login")}
          style={styles.signInText}
        >
          <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
            Already have an Account? Sign In
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#E0E0E0",
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 30,
  },
  icon: {
    marginLeft: 8,
  },
  input: {
    color: "gray",
    marginVertical: 10,
    width: 300,
  },
  registerButton: {
    width: 200,
    backgroundColor: "#fd5c63",
    borderRadius: 6,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 15,
    marginTop: 50,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
  },
  signInText: {
    marginTop: 15,
  },
});

export default Register;
