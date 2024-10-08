import React from "react";
import { StyleSheet, FlatList } from "react-native";
import colors from "@/config/colors";
import Card from "@/components/Card";
import Screen from "../Default";
import AppText from "@/components/AppText";
import Button from "@/components/Button";
import ActivityIndicator from "@/components/ActivityIndicator";
import { useNavigation } from "@react-navigation/native";
import { useGetListings } from "@/hooks/react-query/listings";
import { StatusBar } from "expo-status-bar";

const MainScreen = () => {
  const { data, isLoading, isError } = useGetListings();
  const navigation = useNavigation<any>();

  return (
    <Screen style={styles.screen}>
      <StatusBar style="dark" />
      {isError && (
        <>
          <AppText>Couldn`t retrive the listings.</AppText>
          <Button label="Retry" onPress={() => {}} />
        </>
      )}
      <ActivityIndicator visible={isLoading} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={`$${item.price}`}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate("Details", item)}
          />
        )}
      />
    </Screen>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: 30,
    justifyContent: "center",
    paddingHorizontal: 15,
    backgroundColor: colors.light,
    flex: 1,
  },
});
