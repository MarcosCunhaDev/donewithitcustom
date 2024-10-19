import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Image } from "react-native";

export const InputPicture = () => {
  const [imageData, setImageData] = useState<string | null>(null);

  const handlePickImage = async () => {
    // No permissions request is necessary for launching the image library
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.9,
      });

      if (!result.canceled) {
        setImageData(result.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return imageData ? (
    <View className="flex flex-row justify-center align-middle w-28 h-28 rounded-full bg-slate-100 border border-gray-300 overflow-clip">
      <Image
        className="w-28 h-28 rounded-full overflow-hidden"
        source={{ uri: imageData }}
      />
      <TouchableOpacity onPress={handlePickImage}>
        <View className="flex w-8 h-8 justify-center align-middle absolute bottom-1 -right-1">
          <MaterialCommunityIcons
            name="pencil-circle"
            size={28}
            color={"gray"}
          />
        </View>
      </TouchableOpacity>
    </View>
  ) : (
    <TouchableOpacity onPress={handlePickImage}>
      <View className="flex flex-row  justify-center align-middle w-24 h-24 rounded-full bg-slate-100 border border-gray-300 mt-6 mb-6">
        <MaterialCommunityIcons name="account" size={80} color={"gray"} />
        <View className="w-8 h-8 justify-center align-middle absolute bottom-1 -right-2">
          <MaterialCommunityIcons
            name="pencil-circle"
            size={30}
            color={"gray"}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
