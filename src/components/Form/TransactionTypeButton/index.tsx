import React from "react";
import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

interface Props extends TouchableOpacityProps {
  type: "up" | "down";
  title: string;
  isActive: boolean;
}

const icon = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
};

export function TransactionTypeButton({
  type,
  title,
  isActive,
  ...rest
}: Props) {
  return (
    <S.Container {...rest} isActive={isActive} type={type}>
      <S.Icon name={icon[type]} type={type} />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
