import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";

import * as S from "./styles";

interface SignInSocialButtonProps extends RectButtonProps {
  title: string;
  svg: React.FC<SvgProps>;
}

export function SignInSocialButton({
  title,
  svg: Svg,
  ...rest
}: SignInSocialButtonProps) {
  return (
    <S.Container {...rest}>
      <S.ImageContaner>
        <Svg />
      </S.ImageContaner>

      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
