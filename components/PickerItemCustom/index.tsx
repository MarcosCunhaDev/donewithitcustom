import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface PickerItemI {
  label: string;
  onPress: () => void;
  hasChecked: boolean;
  item: {
    backColorIcon: string;
    iconName: keyof typeof MaterialCommunityIcons.glyphMap;
  };
}

const PickerItem = ({ label, onPress, hasChecked, item }: PickerItemI) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: 120,
        height: 120,
        flexBasis: 0,
        flexGrow: 1,
        display: "flex",
      }}
    >
      <View
        style={{
          position: "relative",
          backgroundColor: item.backColorIcon,
          width: 80,
          height: 80,
          borderRadius: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {item.iconName && (
          <MaterialCommunityIcons name={item.iconName} size={40} color="#fff" />
        )}
      </View>
      <Text style={{}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default PickerItem;
