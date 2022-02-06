import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/colors";
import { useFonts } from "expo-font";
import { Ionicons, Feather } from "@expo/vector-icons";
import { categories, products } from "../constants/categoriesData";
import ProductCard from "../components/ProductCard";
import NavTab from "../components/NavTab";

const Home = ({ navigation }) => {
  const [categoryIndex, setCategoryIndex] = useState(0);
  let [fontsLoaded] = useFonts({
    "Gelasio-SemiBold": require("../assets/fonts/Gelasio-SemiBold.ttf"),
    "Gelasio-Bold": require("../assets/fonts/Gelasio-Regular.ttf"),
    "NunitoSans-Regular": require("../assets/fonts/NunitoSans-Bold.ttf"),
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="search-outline" size={24} color={COLORS.dark} />
          </TouchableOpacity>
          <View style={styles.textWrapper}>
            {fontsLoaded && <Text style={styles.pryHeader}>MAKE YOUR</Text>}
            {fontsLoaded && (
              <Text style={styles.secHeader}>HOME BEAUTIFUL</Text>
            )}
          </View>
          <TouchableOpacity>
            <Feather name="shopping-cart" size={24} color={COLORS.dark} />
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {fontsLoaded && (
            <>
              <View style={styles.categories}>
                {categories.map((item, i) => (
                  <TouchableOpacity
                    key={i}
                    onPress={() => {
                      setCategoryIndex(i);
                    }}
                    activeOpacity={0.8}
                    style={styles.category}
                  >
                    <View
                      style={[
                        styles.categoryBox,
                        categoryIndex === i && styles.categorySelected,
                      ]}
                    >
                      {item.icon}
                    </View>
                    <Text style={styles.categoryText}>{item.category}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </>
          )}
        </ScrollView>

        {/* PRODUCTS SECTION */}
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          contentContainerStyle={{
            marginVertical: 10,
          }}
          renderItem={({ item }) => <ProductCard product={item} />}
        />
      </View>
      <NavTab navigation={navigation} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: COLORS.white,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textWrapper: {
    alignItems: "center",
  },
  pryHeader: {
    fontFamily: "Gelasio-SemiBold",
    fontSize: 18,
    color: COLORS.lightDark,
  },
  secHeader: {
    fontSize: 18,
    color: COLORS.dark,
    fontFamily: "Gelasio-Bold",
  },
  categories: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  category: {
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  categoryBox: {
    backgroundColor: COLORS.boxColor,
    padding: 10,
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  categorySelected: {
    backgroundColor: COLORS.dark,
  },
  categoryText: {
    color: COLORS.dimDark,
    fontFamily: "NunitoSans-Regular",
    fontSize: 13,
  },
});
