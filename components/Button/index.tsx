import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useTheme } from "styled-components/native";

interface ButtonI {
  label: string;
  color?: string;
  onPress: () => void;
}

const Button = ({ label, color, onPress }: ButtonI) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.buttonPrincipal,
        backgroundColor: color || colors.primary,
      }}
    >
      <Text style={styles.textButton}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
