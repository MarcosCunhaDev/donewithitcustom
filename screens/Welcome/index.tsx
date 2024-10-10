import { useNavigation } from "@react-navigation/native";
import React from "react";
import Button from "../../components/Button";
import colors from "@/config/theme";
import {
  BoxLogo,
  ButtonsContainer,
  Container,
  Image,
  Logo,
  Tagline,
} from "./styles";

const WelcomeScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <Container>
      <Image blurRadius={2} source={require("../../assets/background.jpg")}>
        <BoxLogo>
          <Logo source={require("../../assets/logo-red.png")} />
          <Tagline>Sell What You Don't Need</Tagline>
        </BoxLogo>
        <ButtonsContainer>
          <Button
            label="login"
            color={colors.primary}
            onPress={() => navigation.navigate("Login")}
          />
          <Button
            label="register"
            color={colors.secondary}
            onPress={() => navigation.navigate("Register")}
          />
        </ButtonsContainer>
      </Image>
    </Container>
  );
};

export default WelcomeScreen;
