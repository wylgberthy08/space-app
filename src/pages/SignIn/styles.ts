import styled from "styled-components/native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const ImageContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 31px;
`;

export const Content = styled.View`
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const TextContainer = styled.View`
  margin-top: 7px;
  margin-left: 16px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_700};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const TextInfo = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_700};
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 31px;
`;

export const Footer = styled.View`
  align-items: center;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Button = styled.TouchableOpacity`
  width: ${RFValue(311)}px;
  height: ${RFValue(56)}px;
  background-color: ${({ theme }) => theme.colors.background_primary};
  border-radius: ${RFValue(10)}px;
  align-items: center;
  justify-content: center;
`;
export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text};
`;
