import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

export const Container = styled(TouchableOpacity)<{
  isActive: boolean;
  type: "up" | "down";
}>`
  width: 48%;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  border: 1.5px solid ${({ theme }) => theme.colors.text};
  padding: 16px;

  ${({ isActive, type }) =>
    type === "up" &&
    isActive &&
    css`
      background-color: ${({ theme }) => theme.colors.success_light};
      border: 0;
    `}

  ${({ isActive, type }) =>
    type === "down" &&
    isActive &&
    css`
      background-color: ${({ theme }) => theme.colors.attention_light};
      border: 0;
    `}
`;

export const Icon = styled(Feather)<{ type: "up" | "down" }>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;
  color: ${({ theme, type }) =>
    type === "up" ? theme.colors.success : theme.colors.attention};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.title};
`;
