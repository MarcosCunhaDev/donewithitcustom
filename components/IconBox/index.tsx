import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface IconI {
  name: keyof typeof MaterialCommunityIcons.glyphMap;
  size?: number;
  backgroundColor: string;
  iconColor?: string;
}

const Icon = ({
  name,
  size = 40,
  backgroundColor = "#000",
  iconColor = "#fff",
}: IconI) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: size * 0.5,
      }}
    >
      <MaterialCommunityIcons name={name} size={size * 0.5} color={iconColor} />
    </View>
  );
};

export default Icon;
