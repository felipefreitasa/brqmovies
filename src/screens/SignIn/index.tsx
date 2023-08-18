import {
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

import BrqLogoPng from "@assets/brq-logo.png";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import {
  Container,
  LogoImage,
  FormInputsContainer,
  FormButtonsContainer,
  ForgotPasswordButtonLabel,
} from "./styles";

export function SignIn() {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Container>
          <LogoImage alt="BRQ Movies" source={BrqLogoPng} />

          <FormInputsContainer>
            <Input
              label="Usuário"
              leadingIcon="user"
              onCleanInput={() => null}
              style={{ marginBottom: 32 }}
            />

            <Input
              label="Senha"
              secureTextEntry
              leadingIcon="lock"
              onCleanInput={() => null}
            />
          </FormInputsContainer>

          <FormButtonsContainer>
            <Button title="Entrar" />

            <TouchableOpacity activeOpacity={0.8}>
              <ForgotPasswordButtonLabel>
                Esqueci a Senha
              </ForgotPasswordButtonLabel>
            </TouchableOpacity>
          </FormButtonsContainer>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
