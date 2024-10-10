import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  StatusBar,
} from "react-native";


import ListItem from "../../components/ListItem";

const DetailsProduct = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/jacket.jpg")}
        style={{ width: "100%", height: 300 }}
      />
      <View style={styles.rowText}>
        <Text style={styles.title}>Red jacket for sale</Text>
        <Text style={styles.priceStyle}>$100</Text>
      </View>
      <ListItem
        image={require("../../assets/mosh.jpg")}
        title="Moh Hamedani"
        subTitle="5 Listings"
      />
    </SafeAreaView>
  );
};

export default DetailsProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  photo: {
    width: "100%",
    height: "100%",
    position: "relative",
    resizeMode: "contain",
    flexShrink: 1,
  },
  rowText: {
    padding: 20,
    position: "relative",
    height: 80,
    flexDirection: "column",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  priceStyle: {
    marginTop: 10,
    fontSize: 18,
    color: "#4ECDC4",
    fontWeight: "bold",
  },
});
