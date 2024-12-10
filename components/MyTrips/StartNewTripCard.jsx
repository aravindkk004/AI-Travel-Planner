import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";

export default function StartNewTripCard() {
  return (
    <View
      style={{
        padding: 20,
        marginTop: 50,
        display: "flex",
        alignItems: "center",
        gap: 18,
      }}
    >
      <Ionicons name="location-sharp" size={30} color="black" />
      <Text
        style={{ fontSize: 25, fontFamily: "outfit-medium", marginTop: 10 }}
      >
        No Trips planned yet
      </Text>

      <Text style={{ fontSize: 20, fontFamily: "outfit", textAlign: "center" }}>
        Looks like its time to glan a new travel experience! Get Started below
      </Text>

      <TouchableOpacity
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          paddingHorizontal: 30,
        }}
      >
        <Text
          style={{
            color: Colors.WHITE,
            fontSize: 17,
            fontFamily: "outfit-medium",
          }}
        >
          Start a New Trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
