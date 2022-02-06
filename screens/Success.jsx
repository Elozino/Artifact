import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/colors";

const width = Dimensions.get("screen").width - 40;

const Success = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    "Gelasio-SemiBold": require("../assets/fonts/Gelasio-SemiBold.ttf"),
    "Gelasio-Bold": require("../assets/fonts/Gelasio-Regular.ttf"),
    "NunitoSans-Regular": require("../assets/fonts/NunitoSans-Bold.ttf"),
  });
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.wrapper}>
        {fontsLoaded && <Text style={styles.headerText}>SUCCESS!</Text>}
      </View>

      <View style={styles.imgWrapper}>
        <Image
          source={require("../assets/images/sucsess.png")}
          resizeMode="contain"
          style={styles.img}
        />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Your order will be delivered soon.</Text>
        <Text style={styles.text}>Thank you for choosing our app!</Text>
      </View>
      <View style={styles.btnWrapper}>
        <TouchableOpacity activeOpacity={0.5} style={styles.trackOrders}>
          <Text style={{ color: COLORS.white, fontSize: 18 }}>
            TRACK TOUR ORDERS
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnWrapper}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Home")}
          style={styles.goHome}
        >
          <Text>BACK TO HOME</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Success;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    marginVertical: 70,
  },
  headerText: {
    fontSize: 30,
    fontFamily: "Gelasio-SemiBold",
  },
  imgWrapper: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  img: {
    width: 200,
  },
  textWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 40,
  },
  text:{
    fontSize: 18,
    color: COLORS.lightDark
  },
  btnWrapper: {
    paddingHorizontal: 20,
  },
  trackOrders: {
    backgroundColor: COLORS.dark,
    padding: 15,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  goHome: {
    padding: 15,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.black,
  },
});
