import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import DetailsProduct from "../screens/DetailsProduct";
import MainScreen from "../screens/MainScreen";

const Stack = createNativeStackNavigator();

export default function FeedStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FeedScreen" component={MainScreen} />
      <Stack.Screen name="Details" component={DetailsProduct} />
    </Stack.Navigator>
  );
}
