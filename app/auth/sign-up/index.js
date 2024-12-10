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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../../configs/FirebaseConfig";

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const onCreateAccount = () => {
    if (!email && !password && !fullName) {
      ToastAndroid.show("Please enter all details", ToastAndroid.BOTTOM);
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
      });
  };

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 30,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={{ fontFamily: "outfit-bold", fontSize: 25, marginTop: 30 }}>
        Create New Account
      </Text>

      <View style={{ marginTop: 30 }}>
        <Text style={{ fontFamily: "outfit-bold" }}>Full Name</Text>
        <TextInput
          type="text"
          placeholder="Full Name"
          onChangeText={(value) => setFullName(value)}
          value={fullName}
          style={[styles.input, { height: 50 }]}
        />
      </View>

      <View style={{ marginTop: 20 }}>
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
        onPress={onCreateAccount}
        style={{
          padding: 15,
          padding: 15,
          marginTop: 20,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: Colors.WHITE, textAlign: "center" }}>
          Create Account
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.replace("auth/sign-in")}
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
          Sign In
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
