import React from "react";
import { Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import * as S from "./styles";

import AppleSvg from "../../assets/apple.svg";
import GoogleSvg from "../../assets/google.svg";
import LogoSvg from "../../assets/logo.svg";

import { SignInSocialButton } from "../../components/SignInSocialButton";

export function SignIn() {
  return (
    <S.Container>
      <S.Header>
        <S.TitleWrapper>
          <LogoSvg width={RFValue(120)} height={RFValue(68)} />

          <S.Title>
            Controle suas{"\n"}
            finanças de forma{"\n"}
            muito simples
          </S.Title>

          <S.SignInTitle>
            Faça seu login com{"\n"}
            uma das contas abaixo
          </S.SignInTitle>
        </S.TitleWrapper>
      </S.Header>

      <S.Footer>
        <S.FooterWrapper>
          <SignInSocialButton svg={GoogleSvg} title="Entrar com Google" />

          <SignInSocialButton svg={AppleSvg} title="Entrar com Apple" />
          {Platform.OS === "ios" && (
            <SignInSocialButton svg={AppleSvg} title="Entrar com Apple" />
          )}
        </S.FooterWrapper>
      </S.Footer>
    </S.Container>
  );
}
