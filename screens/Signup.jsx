import { useFonts } from "expo-font";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/colors";

const LogIn = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    "Gelasio-SemiBold": require("../assets/fonts/Gelasio-SemiBold.ttf"),
    "Gelasio-Bold": require("../assets/fonts/Gelasio-Bold.ttf"),
    "NunitoSans-Regular": require("../assets/fonts/NunitoSans-Bold.ttf"),
  });
  return (
    <SafeAreaView style={styles.container}>
      {fontsLoaded && (
        <>
          <View style={styles.loginHeader}>
            <View style={styles.line} />
            <Image
              source={require("../assets/images/logo.png")}
              style={styles.logoImg}
            />
            <View style={styles.line} />
          </View>
          <View>
            <Text style={styles.secHeader}>WELCOME</Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.siginContainer}>
              <View style={styles.inputField}>
                <Text style={styles.inputText}>Name</Text>
                <TextInput
                  placeholder="Enter your name"
                  autoComplete="true"
                  style={styles.input}
                />
              </View>
              <View style={styles.inputField}>
                <Text style={styles.inputText}>Email</Text>
                <TextInput
                  placeholder="Enter your email"
                  autoComplete="true"
                  style={styles.input}
                />
              </View>
              <View style={styles.inputField}>
                <Text style={styles.inputText}>Password</Text>
                <TextInput
                  secureTextEntry={true}
                  placeholder="Enter your password"
                  style={styles.input}
                />
              </View>
              <View style={styles.inputField}>
                <Text style={styles.inputText}>Confirm Password</Text>
                <TextInput
                  secureTextEntry={true}
                  placeholder="COnfirm your password"
                  style={styles.input}
                />
              </View>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate("Home")}
              >
                <Text style={styles.btnColor}>SIGN UP</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.signin}>
                <Text>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
                  <Text
                    style={{ color: "#000", fontFamily: "NunitoSans-Regular", marginLeft: 5 }}
                  >
                    SIGN IN
                  </Text>
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: COLORS.bgColor,
  },
  loginHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  line: {
    width: 120,
    height: 2,
    backgroundColor: COLORS.line,
  },
  secHeader: {
    fontSize: 30,
    color: COLORS.dark,
    paddingHorizontal: 20,
    marginVertical: 10,
    fontFamily: "Gelasio-SemiBold",
  },
  siginContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
    elevation: 3,
    backgroundColor: COLORS.bgColor,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    paddingHorizontal: 20,
  },
  inputField: {
    borderBottomColor: COLORS.line,
    borderBottomWidth: 2,
    marginVertical: 10,
    paddingVertical: 10,
  },
  inputText: {
    fontSize: 18,
    marginBottom: 10,
    color: COLORS.lightDark,
    fontFamily: "NunitoSans-Regular",
  },
  input: {
    width: "100%",
  },
  signin: {
    flexDirection: "row",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: COLORS.btnDark,
    height: 40,
    marginTop: 25,
    marginBottom: 20,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  btnColor: {
    color: COLORS.white,
    fontFamily: "NunitoSans-Regular",
  },
});
