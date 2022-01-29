import { useFonts } from "expo-font";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/colors";

const SignIn = ({ navigation }) => {
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
            <Text style={styles.pryHeader}>Hello !</Text>
            <Text style={styles.secHeader}>WELCOME BACK</Text>
          </View>
          <View style={styles.siginContainer}>
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
            <TouchableOpacity style={styles.forgot}>
              <Text>Forgot Password</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.btnColor}>SIGN IN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate("Signup")}
            >
              <Text style={styles.btnColor}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.bgColor,
  },
  loginHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  line: {
    width: 120,
    height: 2,
    backgroundColor: COLORS.line,
  },
  pryHeader: {
    fontSize: 30,
    color: COLORS.lightDark,
    fontFamily: "Gelasio-SemiBold",
  },
  secHeader: {
    fontSize: 30,
    color: COLORS.dark,
    fontFamily: "Gelasio-SemiBold",
  },
  siginContainer: {
    marginTop: 20,
    elevation: 3,
    backgroundColor: COLORS.bgColor,
    borderRadius: 5,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    height: 400,
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
    fontFamily: "NunitoSans-Regular",
  },
  input: {
    width: "100%",
  },
  forgot: {
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    backgroundColor: COLORS.btnDark,
    height: 40,
    marginVertical: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  btnColor: {
    color: COLORS.white,
    fontFamily: "NunitoSans-Regular",
  },
});
