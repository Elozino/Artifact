import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/colors";
import { useFonts } from "expo-font";

export default function Boarding({ navigation }) {
  let [fontsLoaded] = useFonts({
    "Gelasio-SemiBold": require("../assets/fonts/Gelasio-SemiBold.ttf"),
    "Gelasio-Bold": require("../assets/fonts/Gelasio-Bold.ttf"),
    "NunitoSans-Regular": require("../assets/fonts/NunitoSans-Bold.ttf"),
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/homebg.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <SafeAreaView style={styles.wrapper}>
          <View style={styles.textWrapper}>
            {fontsLoaded && <Text style={styles.pryHeader}>MAKE YOUR</Text>}
            {fontsLoaded && (
              <Text style={styles.secHeader}>HOME BEAUTIFUL</Text>
            )}
            {fontsLoaded && (
              <Text style={styles.description}>
                The best simple place where you discover most wonderful
                furnitures and make your home beautiful
              </Text>
            )}
          </View>
          <View style={styles.btnWrapper}>
            {fontsLoaded && (
              <TouchableOpacity
                style={styles.btnContainer}
                onPress={() => navigation.navigate("Signin")}
              >
                <Text style={styles.btnText}>Get Started</Text>
              </TouchableOpacity>
            )}
          </View>
        </SafeAreaView>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    padding: 30,
  },
  textWrapper: {
    flex: 0.5,
    justifyContent: "flex-end",
  },
  btnWrapper: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  pryHeader: {
    fontFamily: "Gelasio-SemiBold",
    fontSize: 24,
    color: COLORS.lightDark,
  },
  secHeader: {
    fontSize: 28,
    marginVertical: 10,
    color: COLORS.dark,
    fontFamily: "Gelasio-Bold",
  },
  description: {
    marginTop: 10,
    fontSize: 18,
    marginLeft: 10,
    lineHeight: 30,
    color: COLORS.dimDark,
    fontFamily: "NunitoSans-Regular",
  },
  btnContainer: {
    backgroundColor: COLORS.btnDark,
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 45,
    borderRadius: 5,
  },
  btnText: {
    color: "white",
    fontSize: 18,
    fontFamily: "NunitoSans-Regular",
  },
});


