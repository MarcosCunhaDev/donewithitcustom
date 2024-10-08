import React, { useReducer, useContext } from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingEditScreen from "../screens/ListingEdit";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import FeedStack from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";

const Tab = createBottomTabNavigator();

const renderIconsTabNavigation = (route: any, size: number, color: string) => {
  if (route.name === "Feed") {
    return <MaterialCommunityIcons name="home" size={size} color={color} />;
  } else if (route.name === "Add Product") {
    return (
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "tomato",
          marginBottom: 15,
          borderWidth: 10,
          borderColor: "white",
        }}
      >
        <MaterialIcons name="add-circle" size={30} color={"white"} />
      </View>
    );
  }
  return <MaterialCommunityIcons name="account" size={size} color={color} />;
};

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return renderIconsTabNavigation(route, size, color);
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="FeedStack"
        component={FeedStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Add Product"
        component={ListingEditScreen}
        options={{ title: "" }}
        // options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
