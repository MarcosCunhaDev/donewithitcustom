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
          {imageUris.map((uri) => {
            return (
              <ImageInput
                key={uri}
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            );
          })}
          <ImageInput
            imageUri={null}
            onChangeImage={(uri) => onAddImage(uri)}
          />
        </Container>
      </ScrollView>
    </View>
  );
};

export default ImageInputList;
