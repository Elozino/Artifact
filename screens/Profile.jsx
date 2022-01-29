import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/colors";
import NavTab from "../components/NavTab";

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="search-outline" size={24} color={COLORS.dark} />
          </TouchableOpacity>
          <Text style={styles.title}>PROFILE</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="md-arrow-redo-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.profile}>
          <Image
            source={require("../assets/images/profile.png")}
            style={styles.image}
          />
          <View style={styles.profileDetails}>
            <Text style={styles.name}>Bruno Pham</Text>
            <Text style={styles.email}>bruno203@gmail.com</Text>
          </View>
        </View>
      </View>
      <NavTab navigation={navigation}/>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    paddingHorizontal: 20,
    marginTop: 10,
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  title: {
    fontSize: 18,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileDetails: {
    marginLeft: 20,
  },
  name: {
    fontSize: 20,
    color: COLORS.dark,
  },
  email: {
    fontSize: 16,
    color: COLORS.dimDark,
  },
});
