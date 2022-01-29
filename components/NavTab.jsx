import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/colors";

const NavTab = ({ navigation }) => {
  return (
    <View style={styles.navTab}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Ionicons name="ios-home" size={24} color="black" />
      </TouchableOpacity>
      <View>
        <Ionicons name="md-bookmark-outline" size={24} color="black" />
      </View>
      <View>
        <Ionicons name="ios-notifications-outline" size={24} color="black" />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Ionicons name="md-person-outline" size={24} color="black" />
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
