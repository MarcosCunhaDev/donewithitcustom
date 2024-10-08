import React from "react";
import { View, ActivityIndicator } from "react-native";

const ActivityIndicatorD = ({ visible }: { visible: boolean }) => {
  if (!visible) return null;

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        zIndex: 3,
        backgroundColor: "white",
      }}
    >
      <ActivityIndicator size="large" color={"tomato"} />
    </View>
  );
};

export default ActivityIndicatorD;
