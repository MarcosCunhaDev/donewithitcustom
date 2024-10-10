import React from "react";
import { View } from "react-native";
import { useTheme } from "styled-components/native";

const ItemSeparator = () => {
  const { colors } = useTheme();

  return (
    <View
      style={{ width: "100%", height: 1, backgroundColor: colors.light }}
    ></View>
  );
};

export default ItemSeparator;
