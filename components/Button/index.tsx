import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import colors from "../../config/colors";
import styles from "./styles";

interface ButtonI {
  label: string;
  color?: string;
  onPress: () => void;
}

const Button = ({ label, color, onPress }: ButtonI) => {
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
