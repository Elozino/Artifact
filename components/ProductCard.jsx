import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { COLORS } from "../constants/colors";
import { useFonts } from "expo-font";

const width = Dimensions.get("screen").width / 2 - 25;

const ProductCard = ({ navigation, product }) => {
  let [fontsLoaded] = useFonts({
    "NunitoSans-Regular": require("../assets/fonts/NunitoSans-Bold.ttf"),
  });

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Product", product)}
    >
      {fontsLoaded && (
        <View style={styles.productContainer}>
          <View style={styles.image}>
            <Image source={product.image} style={styles.image} />
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    width,
    // backgroundColor: "grey",
  },
  image: {
    flex: 1,
    resizeMode: "contain",
  },
  productName: {
    fontSize: 14,
    color: COLORS.dimDark,
    fontFamily: "NunitoSans-Regular",
    marginTop: 8,
  },
  productPrice: {
    fontSize: 14,
    color: COLORS.dark,
    fontFamily: "NunitoSans-Regular",
    marginVertical: 8,
  },
});
