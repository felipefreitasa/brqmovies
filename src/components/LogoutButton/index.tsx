import { PressableProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import { Container, Title } from "./styles";

export function LogoutButton({ ...rest }: PressableProps) {
  const { COLORS } = useTheme();

  return (
    <Container testID="logout-button" {...rest}>
      <MaterialIcons size={24} name="logout" color={COLORS.WHITE} />

      <Title numberOfLines={1}>Sair</Title>
    </Container>
  );
}
