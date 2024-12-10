import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { TextInput } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../../configs/FirebaseConfig";

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const onSignIn = () => {
    if (!email && !password) {
      ToastAndroid.show("Please enter Email & Password", ToastAndroid.BOTTOM);
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        if (errorCode == "auth/invalid-credential") {
          ToastAndroid.show("Invalid Credentials", ToastAndroid.BOTTOM);
        }
      });
  };

  return (
    <View
      style={{
        padding: 25,
        backgroundColor: Colors.WHITE,
        height: "100%",
        paddingTop: 30,
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{ fontFamily: "outfit-bold", fontSize: 30, marginTop: 20 }}>
        Let's Sign You In
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          color: Colors.GRAY,
          marginTop: 20,
          fontSize: 30,
        }}
      >
        Welcome Back
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          color: Colors.GRAY,
          marginTop: 10,
          fontSize: 30,
        }}
      >
        You've been missed
      </Text>

      <View style={{ marginTop: 30 }}>
        <Text style={{ fontFamily: "outfit-bold" }}>Email</Text>
        <TextInput
          type="text"
          placeholder="Enter Email"
          onChangeText={(value) => setEmail(value)}
          value={email}
          style={[styles.input, { height: 50 }]}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "outfit-bold" }}>Password</Text>
        <TextInput
          secureTextEntry={true}
          placeholder="Enter Password"
          onChangeText={(value) => setPassword(value)}
          value={password}
          style={styles.input}
        />
      </View>

      <TouchableOpacity
        onPress={onSignIn}
        style={{
          padding: 15,
          padding: 15,
          marginTop: 20,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: Colors.WHITE, textAlign: "center" }}>
          Sign In
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.replace("auth/sign-up")}
        style={{
          padding: 15,
          padding: 15,
          marginTop: 20,
          backgroundColor: Colors.WHITE,
          borderRadius: 10,
          borderWidth: 1,
        }}
      >
        <Text style={{ color: Colors.PRIMARY, textAlign: "center" }}>
          Create Account
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 9,
    borderColor: Colors.GREY,
    fontFamily: "outfit",
    marginTop: 4,
  },
});
