import { StyleSheet, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/colors";
import { useSelector, useDispatch } from "react-redux";
import { tabActive } from "../redux/actions/navigationAction";

const NavTab = ({ navigation }) => {
  const { activeIndex} = useSelector((state) => state.navigationReducer);
  const dispatch = useDispatch();


  return (
    <View style={styles.navTab}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate("Home");
          dispatch(tabActive(1));
          // console.log(dispatch(tabActive(1)));
        }}
      >
        <Ionicons
          name="ios-home"
          size={24}
          color={activeIndex === 1 ? "green" : "black"}
        />
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.5}>
        <Ionicons name="md-bookmark-outline" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.5}>
        <Ionicons name="ios-notifications-outline" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate("Profile");
          dispatch(tabActive(2));
        }}
      >
        <Ionicons
          name="md-person-outline"
          size={24}
          color={activeIndex === 2 ? "green" : "black"}
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
