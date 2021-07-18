import React, { useState } from "react";
import { ActivityIndicator, Alert, Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { useTheme } from "styled-components";
import { useAuth } from "../../hooks/auth";

import AppleSvg from "../../assets/apple.svg";
import GoogleSvg from "../../assets/google.svg";
import LogoSvg from "../../assets/logo.svg";

import { SignInSocialButton } from "../../components/SignInSocialButton";

import * as S from "./styles";

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false);

  const theme = useTheme();
  const { signInWithGoogle, signInWithApple } = useAuth();

  async function handleSignInWithGoogle() {
    try {
      setIsLoading(true);
      return await signInWithGoogle();
    } catch (error) {
      setIsLoading(false);
      console.error(error);

      Alert.alert("Não foi possível conectar a conta Google");
    }
  }
  async function handleSignInWithApple() {
    try {
      setIsLoading(true);
      return await signInWithApple();
    } catch (error) {
      setIsLoading(false);
      console.error(error);

      Alert.alert("Não foi possível conectar a conta Apple");
    }
  }

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
          <SignInSocialButton
            svg={GoogleSvg}
            title="Entrar com Google"
            onPress={handleSignInWithGoogle}
          />
          {Platform.OS === "ios" && (
            <SignInSocialButton
              svg={AppleSvg}
              title="Entrar com Apple"
              onPress={handleSignInWithApple}
            />
          )}
        </S.FooterWrapper>

        {isLoading && (
          <ActivityIndicator
            color={theme.colors.shape}
            size="large"
            style={{ marginTop: 18 }}
          />
        )}
      </S.Footer>
    </S.Container>
  );
}
