import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import AdIcon from "react-native-vector-icons/AntDesign";
import { COLORS } from "../constants/colors";
import NavTab from "../components/NavTab";
import { useFonts } from "expo-font";
import { ScrollView, Switch, TextInput } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import { switchToggle } from "../redux/actions/navigationAction";

const Settings = ({ navigation }) => {
  const { activeToggle } = useSelector((state) => state.navigationReducer);
  const dispatch = useDispatch();
  const toggle = (activeToggle) => {
    dispatch(switchToggle(!activeToggle));
  };

  // FONT
  let [fontsLoaded] = useFonts({
    "Gelasio-SemiBold": require("../assets/fonts/Gelasio-SemiBold.ttf"),
    "Gelasio-Bold": require("../assets/fonts/Gelasio-Regular.ttf"),
    "NunitoSans-Regular": require("../assets/fonts/NunitoSans-Bold.ttf"),
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon
            name="arrow-back-ios"
            size={26}
            color="black"
            onPress={() => navigation.goBack()}
          />
          <View style={styles.headerWrapper}>
            {fontsLoaded && <Text style={styles.headerText}>SETTINGS</Text>}
          </View>
        </View>
        <ScrollView>
          <View style={styles.info}>
            {/* PERSONAL INFORMATION */}
            <View style={styles.header}>
              {fontsLoaded && (
                <Text style={styles.infoText}>Personal Information</Text>
              )}
              <TouchableOpacity>
                <AdIcon name="edit" size={26} color={COLORS.dimDark} />
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                {fontsLoaded && <Text style={styles.textLight}>Name</Text>}
                {fontsLoaded && <Text style={styles.text}>Elozino Ovedhe</Text>}
                {/* <TextInput placeholder="Enter Fullname" /> */}
              </View>
              <View style={styles.inputWrapper}>
                {fontsLoaded && <Text style={styles.textLight}>Email</Text>}
                {fontsLoaded && (
                  <Text style={styles.text}>ovedhee@gmail.com</Text>
                )}
                {/* <TextInput placeholder="Enter Fullname" /> */}
              </View>
            </View>

            {/* PASSWORD */}
            <View style={styles.header}>
              {fontsLoaded && <Text style={styles.infoText}>Password</Text>}
              <TouchableOpacity>
                <AdIcon name="edit" size={26} color={COLORS.dimDark} />
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                {fontsLoaded && <Text style={styles.textLight}>Password</Text>}
                {fontsLoaded && <Text style={styles.text}>Elozino Ovedhe</Text>}
                {/* <TextInput placeholder="Enter Fullname" /> */}
              </View>
            </View>

            {/* NOTIFICATIONS */}
            <View style={styles.header}>
              {fontsLoaded && (
                <Text style={styles.infoText}>Notifications</Text>
              )}
              <TouchableOpacity>
                <AdIcon name="edit" size={26} color={COLORS.dimDark} />
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.notificationWrapper}>
                {fontsLoaded && <Text style={styles.text}>Sales</Text>}
                <Switch
                  trackColor={{ false: COLORS.lightDark, true: COLORS.green }}
                  thumbColor={activeToggle ? COLORS.white : "white"}
                  ios_backgroundColor="#3e3e"
                  onValueChange={() => toggle()}
                  value={activeToggle}
                />
              </View>
              <View style={styles.notificationWrapper}>
                {fontsLoaded && <Text style={styles.text}>New Arrivals</Text>}
                <Switch
                  trackColor={{ false: COLORS.lightDark, true: COLORS.green }}
                  thumbColor={activeToggle == 2 ? COLORS.white : "white"}
                  ios_backgroundColor="#3e3e"
                  onValueChange={() => toggle()}
                  value={activeToggle}
                />
              </View>
              <View style={styles.notificationWrapper}>
                {fontsLoaded && (
                  <Text style={styles.text}>Delivery status changes</Text>
                )}
                <Switch
                  trackColor={{ false: COLORS.lightDark, true: COLORS.green }}
                  thumbColor={activeToggle ? COLORS.white : "white"}
                  ios_backgroundColor="#3e3e"
                  onValueChange={() => toggle()}
                  value={activeToggle}
                />
              </View>
            </View>
            {/* HELP CENTER */}
            <View style={styles.header}>
              {fontsLoaded && <Text style={styles.infoText}>Help Center</Text>}
              <TouchableOpacity>
                <AdIcon name="edit" size={26} color={COLORS.dimDark} />
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.notificationWrapper}>
                {fontsLoaded && <Text style={styles.text}>FAQs</Text>}
                <Switch
                  trackColor={{ false: COLORS.lightDark, true: COLORS.green }}
                  thumbColor={activeToggle ? COLORS.white : "white"}
                  ios_backgroundColor="#3e3e"
                  onValueChange={() => toggle()}
                  value={activeToggle}
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <View></View>
      </View>
      <NavTab navigation={navigation} />
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontFamily: "Gelasio-SemiBold",
  },
  // info:{
  //   paddingHorizontal: 20,
  // },
  infoText: {
    color: COLORS.dimDark,
    fontSize: 18,
  },
  inputContainer: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  inputWrapper: {
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 7,
    elevation: 10,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
  },
  textLight: {
    color: COLORS.lightDark,
    marginBottom: 5,
  },
  notificationWrapper: {
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 7,
    elevation: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
});
