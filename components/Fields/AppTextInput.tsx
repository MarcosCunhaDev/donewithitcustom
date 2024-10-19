import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  DimensionValue,
} from "react-native";

import defaultStyles from "../../config/defaultStyles";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginVertical: 10,
    width: "100%",
  },
  icon: {
    marginRight: 10,
  },
});

interface AppTextInputI extends TextInputProps {
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
  widthContainer?: DimensionValue;
}

const AppTextInput = ({
  icon,
  widthContainer,
  ...otherProps
}: AppTextInputI) => {
  return (
    <View
      style={{ ...styles.container, width: widthContainer || "100%" }}
      className="rounded-md bg-gray-100"
    >
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={[defaultStyles.text, { width: "90%" }]}
        {...otherProps}
      />
    </View>
  );
};

export default AppTextInput;
