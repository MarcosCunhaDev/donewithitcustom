import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useTheme } from "styled-components/native";

interface ButtonI {
  label: string;
  color?: string;
  onPress: () => void;
  disabled?: boolean;
}

const Button = ({ label, color, onPress, disabled }: ButtonI) => {
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
      <Text style={styles.textButton}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
