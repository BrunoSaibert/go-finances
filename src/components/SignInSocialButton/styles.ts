import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  flex-direction: row;
  align-items: center;

  height: ${RFValue(56)}px;

  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;

  margin-bottom: 16px;
`;

export const ImageContaner = styled.View`
  align-items: center;
  justify-content: center;

  height: 100%;
  padding: ${RFValue(16)}px;

  border-color: ${({ theme }) => theme.colors.background};
  border-right-width: 1px;
`;

export const Title = styled.Text`
  flex: 1;
  text-align: center;

  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`;
