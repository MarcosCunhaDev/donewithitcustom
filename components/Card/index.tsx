import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./styles";

interface CardI {
  title: string;
  subTitle: string;
  imageUrl: string;
  onPress: () => void;
}

const Card = ({ title, subTitle, imageUrl, onPress }: CardI) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <Image
        source={{ uri: imageUrl }}
        style={{ width: "100%", height: 200 }}
      />
      <View style={styles.rowContent}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <Text numberOfLines={1} style={styles.subTitle}>
          {subTitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
