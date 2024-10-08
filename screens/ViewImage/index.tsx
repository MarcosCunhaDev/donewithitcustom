import { AntDesign, Feather } from "@expo/vector-icons";
import React from "react";
import { Container, Photo, RowIcons } from "./styles";

const ViewImageScreen = () => {
  return (
    <Container>
      <RowIcons>
        <AntDesign
          name="close"
          size={28}
          color="white"
          style={{ marginLeft: 25 }}
        />
        <Feather
          name="trash-2"
          size={28}
          color="white"
          style={{ marginRight: 25 }}
        />
      </RowIcons>
      <Photo resizeMode="contain" source={require("../../assets/chair.jpg")} />
    </Container>
  );
};

export default ViewImageScreen;
