import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  TextInputProps,
} from "react-native";

import defaultStyles from "../../config/defaultStyles";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
    padding: 12,
    marginVertical: 10,
    backgroundColor: defaultStyles.colors.light,
  },
  icon: {
    marginRight: 10,
  },
});

interface AppTextInputI extends TextInputProps {
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
  widthContainer?: number | string;
}

const AppTextInput = ({
  icon,
  widthContainer,
  ...otherProps
}: AppTextInputI) => {
  return (
    <View style={{ ...styles.container, width: widthContainer || "100%" }}>
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
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
};

export default AppTextInput;
