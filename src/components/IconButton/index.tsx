import { useTheme } from "styled-components/native";
import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Container } from "./styles";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
}

export function IconButton({ icon, ...rest }: Props) {

  const { COLORS } = useTheme()

  return (
    <Container {...rest}>
      <MaterialIcons
        size={24}
        name={icon}
        color={COLORS.PRIMARY}
      />
    </Container>
  );
}
