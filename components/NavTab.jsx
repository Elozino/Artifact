import { StyleSheet, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/colors";

const NavTab = ({ navigation }) => {
  const [categoryIndex, setCategoryIndex] = useState(0);

  function color(val) {
    setCategoryIndex(val);
    console.log(categoryIndex);
  }
  return (
    <View style={styles.navTab}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
          color(1);
        }}
      >
        <Ionicons
          name="ios-home"
          size={24}
          color={categoryIndex === 1 ? "green" : "orange"}
        />
      </TouchableOpacity>
      <View>
        <Ionicons name="md-bookmark-outline" size={24} color="black" />
      </View>
      <View>
        <Ionicons name="ios-notifications-outline" size={24} color="black" />
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate("Profile");
          color(2);
        }}
      >
        <Ionicons
          name="md-person-outline"
          size={24}
          color={categoryIndex === 2 ? "green" : "orange"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default NavTab;

const styles = StyleSheet.create({
  navTab: {
    height: 60,
    backgroundColor: COLORS.bgColor,
    elevation: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
