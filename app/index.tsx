import React from "react";
import { AuthContextProvider } from "@/auth/context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AuthNavigator from "../navigation/AuthNavigator";
import { NavigationStack } from "@/navigation/NavigationStack";
import { jwtDecode } from "jwt-decode";
import authStorage from "@/auth/storage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const queryClient = new QueryClient();

const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationStack />
        </GestureHandlerRootView>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}
