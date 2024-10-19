import React, { useRef, useState } from "react";
import { ScrollView, View } from "react-native";
import ImageInput from "../ImageInput";
import { Container } from "./styles";

interface ImageInputListI {
  imageUris: string[];
  onAddImage: (uri: string | null) => void;
  onRemoveImage: (uri: string) => void;
}

const ImageInputList = ({
  imageUris = [],
  onAddImage,
  onRemoveImage,
}: ImageInputListI) => {
  const scrollView = useRef<any>();

  const [imageUri, setImageUri] = useState(null);
  const [uris, setUris] = useState([]);

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
        showsHorizontalScrollIndicator={false}
      >
        <Container>
          {imageUris.map((uri, index) => {
            return (
              <View className={`${index !== 0 ? "ml-1" : "ml-0"}`}>
                <ImageInput
                  key={uri}
                  imageUri={uri}
                  onChangeImage={() => onRemoveImage(uri)}
                />
              </View>
            );
          })}
          <View className={`${imageUris.length > 0 ? "ml-1" : "ml-0"}`}>
            <ImageInput
              imageUri={null}
              onChangeImage={(uri) => onAddImage(uri)}
            />
          </View>
        </Container>
      </ScrollView>
    </View>
  );
};

export default ImageInputList;
