import { TouchableOpacity } from "react-native";
import { useTheme } from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Container, Title } from "./styles";

export function AppBar() {
  const { COLORS } = useTheme();

  return (
    <Container>
      <Title>BRQ Movies</Title>

      <TouchableOpacity>
        <MaterialCommunityIcons
          size={24}
          name="dots-vertical"
          color={COLORS.WHITE}
        />
      </TouchableOpacity>
    </Container>
  );
}
