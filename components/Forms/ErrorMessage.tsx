import React from "react";
import { Text } from "react-native";

interface ErrorMessageI {
  error: string;
  visible: boolean;
}

const ErrorMessage = ({ error, visible }: ErrorMessageI) => {
  if (!visible || !error) {
    return null;
  }
  return <Text className="self-center text-sm text-red-500">{error}</Text>;
};

export default ErrorMessage;
