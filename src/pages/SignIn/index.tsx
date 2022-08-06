import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";

import RocketImage from "../../assets/rocket.png";

import {
  Button,
  ButtonText,
  Container,
  Content,
  Footer,
  ImageContainer,
  TextContainer,
  TextInfo,
  Title,
} from "./styles";

export function SignIn() {
  const navigation = useNavigation();
  function handleNavigateToHome() {
    navigation.navigate("Home");
  }
  return (
    <Container>
      <ImageContainer>
        <Image
          source={RocketImage}
          width={RFValue(187)}
          height={RFValue(336)}
        />
      </ImageContainer>

      <Content>
        <TextContainer>
          <Title>SPACE-APP</Title>
          <TextInfo>
            Veja dados {"\n"}
            interessantes sobre {"\n"}
            os lançamentos da space X
          </TextInfo>
        </TextContainer>
      </Content>
      <Footer>
        <Button onPress={handleNavigateToHome}>
          <ButtonText>Entrar</ButtonText>
        </Button>
      </Footer>
    </Container>
  );
}
