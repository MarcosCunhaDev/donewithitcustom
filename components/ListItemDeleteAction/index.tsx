import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import colors from "@/config/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

const styles = StyleSheet.create({
  style: {
    width: 70,
    backgroundColor: colors.danger,
    justifyContent: "center",
    alignItems: "center",
  },
});

const ListItemDeleteAction = ({ onPress }: { onPress: () => void }) => {
  const { colors } = useTheme();
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.style}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={30}
          color={colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListItemDeleteAction;
