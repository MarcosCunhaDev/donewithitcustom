import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {},
});

const Screen = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: any;
}) => {
  return (
    <SafeAreaView style={[styles.container]} className="flex flex-1 bg-white">
      <View className="flex flex-1 px-4 py-4">{children}</View>
    </SafeAreaView>
  );
};

export default Screen;
