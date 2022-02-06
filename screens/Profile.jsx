import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
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
            <Text style={styles.name}>Elozino Ovedhe</Text>
            <Text style={styles.email}>ovedhee@gmail.com</Text>
          </View>
        </View>
      </View>
      <View style={styles.profileCardContainer}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.profileCard}>
            <View>
              <Text style={styles.name}>My Orders</Text>
              <Text style={styles.email}>Already have 10 orders</Text>
            </View>
            <View>
              <MaterialIcons name="arrow-forward-ios" size={20} color="black" />
            </View>
          </View>
          <View style={styles.profileCard}>
            <View>
              <Text style={styles.name}>Shipping Addresses</Text>
              <Text style={styles.email}>03 Addressess</Text>
            </View>
            <View>
              <MaterialIcons name="arrow-forward-ios" size={20} color="black" />
            </View>
          </View>
          <View style={styles.profileCard}>
            <View>
              <Text style={styles.name}>Payment Method</Text>
              <Text style={styles.email}>You have 2 cards</Text>
            </View>
            <View>
              <MaterialIcons name="arrow-forward-ios" size={20} color="black" />
            </View>
          </View>
          <View style={styles.profileCard}>
            <View>
              <Text style={styles.name}>My reviews</Text>
              <Text style={styles.email}>Reviews for 5 items</Text>
            </View>
            <View>
              <MaterialIcons name="arrow-forward-ios" size={20} color="black" />
            </View>
          </View>
          <View style={styles.profileCard}>
            <View>
              <Text style={styles.name}>Setting</Text>
              <Text style={styles.email}>
                Notification, Password, FAQ, Contact
              </Text>
            </View>
            <View>
              <MaterialIcons name="arrow-forward-ios" size={20} color="black" />
            </View>
          </View>
        </ScrollView>
      </View>
      <NavTab navigation={navigation} />
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
    fontSize: 18,
    color: COLORS.dark,
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
    color: COLORS.dimDark,
  },
  profileCardContainer: {
    paddingHorizontal: 20,
    flex: 1,
  },
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 3,
    shadowColor: "#52006A",
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8,
    marginVertical: 10,
  },
  card: {},
});
