import React from "react";
import { Text, TouchableOpacity, ActivityIndicator } from "react-native";
import styles from "./styles";
import { useTheme } from "styled-components/native";

interface ButtonI {
  label: string;
  color?: string;
  onPress: () => void;
  disabled?: boolean;
  isLoading?: boolean;
}

const Button = ({
  label,
  color,
  onPress,
  disabled,
  isLoading = false,
}: ButtonI) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{
        ...styles.buttonPrincipal,
        backgroundColor: disabled ? "gray" : color || colors.primary,
      }}
    >
      {isLoading ? (
        <ActivityIndicator size={"small"} color={"white"} />
      ) : (
        <Text style={styles.textButton}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
