import React from "react";
import { AuthContextProvider } from "@/auth/context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationStack } from "@/navigation/NavigationStack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components/native";
import { theme } from "@/config/theme";

const queryClient = new QueryClient();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationStack />
          </GestureHandlerRootView>
        </AuthContextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
