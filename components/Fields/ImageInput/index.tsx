import React, { useEffect } from "react";
import {
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "@/config/defaultStyles";
import { Container } from "./styles";
import { useTheme } from "styled-components/native";


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    width: 80,
    height: 80,
    marginVertical: 10,
    backgroundColor: defaultStyles.colors.light,
    justifyContent: "center",
    marginLeft: 5,
  },
  icon: {
    marginRight: 10,
  },
});

interface ImageInputI {
  imageUri: string | null;
  onChangeImage: (uri: string | null) => void;
}

const ImageInput = ({ imageUri, onChangeImage }: ImageInputI) => {
  const { colors } = useTheme();
  const requestPermission = async () => {
    const { granted } = await ImagePicker.getCameraPermissionsAsync();
    if (!granted) {
      alert("You need to enable permission to acess the library!");
    }
  };
  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.5,
      });
      if (!result.canceled) {
        onChangeImage(result.assets[0]?.uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        {
          text: "No",
          onPress: () => {},
          style: "cancel",
        },
      ]);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.container} />
      ) : (
        <Container>
          <MaterialCommunityIcons
            name="camera"
            size={35}
            color={colors.medium}
          />
        </Container>
      )}
    </TouchableWithoutFeedback>
  );
};

export default ImageInput;
