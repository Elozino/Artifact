import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Boarding from "./screens/Boarding";
import Home from "./screens/Home";
import Signup from "./screens/Signup";
import SignIn from "./screens/SignIn";
import Profile from "./screens/Profile";
import Settings from "./screens/Settings";
import Success from "./screens/Success";
import Orders from "./screens/Orders";
import Product from "./screens/Product";

export default function Main() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={{ header: () => null }}>
        <Stack.Screen name="Boarding" component={Boarding} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signin" component={SignIn} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="Product" component={Product}/>
        {/* <Stack.Screen name="" component={}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
