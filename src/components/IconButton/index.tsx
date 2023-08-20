import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

import { theme } from "@theme/index";

import { Container } from "./styles";

type Props = TouchableOpacityProps & {
  iconColor?: string;
  isActive?: boolean;
  icon: keyof typeof MaterialIcons.glyphMap;
}

const { COLORS } = theme

export function IconButton({ icon, iconColor = COLORS.PRIMARY, isActive, ...rest }: Props) {

  return (
    <Container testID="icon-button-container" isActive={isActive} {...rest}>
      <MaterialIcons
        size={24}
        name={icon}
        color={iconColor}
        testID="icon-button-icon"
      />
    </Container>
  );
}
