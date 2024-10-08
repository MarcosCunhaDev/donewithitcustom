import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import defaultStyles from "../../config/defaultStyles";
import AppText from "../AppText";

const styles = StyleSheet.create({
  text: {
    padding: 10,
  },
});

interface PickerItemI {
  label: string;
  onPress: () => void;
  hasChecked: boolean;
}

const PickerItem = ({ label, onPress, hasChecked }: PickerItemI) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ flexDirection: "row", alignItems: "center" }}
    >
      <AppText style={styles.text}>{label}</AppText>
      {hasChecked && (
        <Ionicons
          name="checkmark"
          size={26}
          color={defaultStyles.colors.green}
        />
      )}
    </TouchableOpacity>
  );
};

export default PickerItem;
