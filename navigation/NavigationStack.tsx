import { useAuthContext } from "@/auth/context";
import { NavigationContainer } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";

import authStorage from "@/auth/storage";
import * as SplashScreen from "expo-splash-screen";
import AuthNavigator from "../navigation/AuthNavigator";
import AppNavigator from "./AppNavigator";

SplashScreen.preventAutoHideAsync();

export const NavigationStack = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const { user, setUser } = useAuthContext();

  useEffect(() => {
    async function prepare() {
      try {
        restoreUser();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (!user) return;
    setUser(user);
  };

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  return (
    <NavigationContainer independent>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
