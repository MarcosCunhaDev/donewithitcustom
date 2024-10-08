import React from "react";
import { StyleSheet } from "react-native";
import AppText from "../AppText";

const styles = StyleSheet.create({
  error: { color: "red", fontSize: 14, alignSelf: "center" },
});

interface ErrorMessageI {
  error: string;
  visible: boolean;
}

const ErrorMessage = ({ error, visible }: ErrorMessageI) => {
  if (!visible || !error) {
    return null;
  }
  return <AppText style={styles.error}>{error}</AppText>;
};

export default ErrorMessage;
