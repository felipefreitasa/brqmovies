import * as yup from "yup";
import { useEffect, useState } from "react";
import Animated, { FadeIn } from "react-native-reanimated";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

import { useAuth } from "@hooks/useAuth";

import BrqLogoPng from "@assets/brq-logo.png";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import {
  Snackbar,
  Container,
  LogoImage,
  FormInputsContainer,
  FormButtonsContainer,
  ForgotPasswordButtonLabel,
} from "./styles";

const AnimatedLogoImage = Animated.createAnimatedComponent(LogoImage);
const AnimatedFormInputsContainer =
  Animated.createAnimatedComponent(FormInputsContainer);
const AnimatedFormButtonsContainer =
  Animated.createAnimatedComponent(FormButtonsContainer);

type FormDataProps = {
  user: string;
  password: string;
};

const signInSchema = yup.object({
  user: yup.string().required("Informe o usuário"),
  password: yup
    .string()
    .required("Informe a senha")
    .matches(/^[0-9]*$/, "Insira apenas caracteres numéricos"),
});

export function SignIn() {
  const { setIsLogged } = useAuth();

  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const {
    control,
    getValues,
    resetField,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signInSchema),
  });

  const isButtonDisabled = !getValues("user") || !getValues("password");

  function handleSignIn({ user, password }: FormDataProps) {
    if (user === "user" && password === "123") {
      setIsLogged(true);
    } else {
      setSnackbarVisible(true);
      setSnackbarMessage("Usuário inválido!");
    }
  }

  useEffect(() => {
    if (snackbarVisible) {
      setTimeout(() => {
        setSnackbarVisible(false);
      }, 3000);
    }
  }, [snackbarVisible]);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Container>
          <AnimatedLogoImage
            alt="BRQ Movies"
            source={BrqLogoPng}
            entering={FadeIn.duration(600)}
          />

          <AnimatedFormInputsContainer
            entering={FadeIn.duration(600).delay(300)}
          >
            <Controller
              control={control}
              name="user"
              render={({ field: { onChange, value } }) => (
                <Input
                  value={value}
                  label="Usuário"
                  leadingIcon="user"
                  onChangeText={onChange}
                  style={{ marginBottom: 32 }}
                  errorMessage={errors.user?.message}
                  onCleanInput={() => resetField("user")}
                  onSubmitEditing={handleSubmit(handleSignIn)}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <Input
                  label="Senha"
                  value={value}
                  secureTextEntry
                  leadingIcon="lock"
                  keyboardType="numeric"
                  onChangeText={onChange}
                  style={{ marginBottom: 32 }}
                  errorMessage={errors.password?.message}
                  onCleanInput={() => resetField("password")}
                  onSubmitEditing={handleSubmit(handleSignIn)}
                />
              )}
            />
          </AnimatedFormInputsContainer>

          <AnimatedFormButtonsContainer
            entering={FadeIn.duration(600).delay(600)}
          >
            <Button
              title="Entrar"
              disabled={isButtonDisabled}
              onPress={handleSubmit(handleSignIn)}
            />

            <TouchableOpacity activeOpacity={0.8}>
              <ForgotPasswordButtonLabel>
                Esqueci a Senha
              </ForgotPasswordButtonLabel>
            </TouchableOpacity>
          </AnimatedFormButtonsContainer>

          {snackbarVisible && (
            <Snackbar
              message={snackbarMessage}
              style={{ start: 20, end: 20 }}
            />
          )}
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
