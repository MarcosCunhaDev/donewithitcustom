import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

export default function AppText({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: any;
}) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
