import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import { Container, Description, Header, IconContainer, Label } from "./styles";

export type MovieDetailsCardProps = {
  label: string;
  description: string | number;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export function MovieDetailsCard({ icon, label, description }: MovieDetailsCardProps) {
  const { COLORS } = useTheme();

  return (
    <Container>
      <Header>
        <IconContainer>
          <MaterialIcons size={14} name={icon} color={COLORS.PRIMARY} />
        </IconContainer>

        <Label numberOfLines={1}>{label}</Label>
      </Header>

      <Description numberOfLines={1}>{description}</Description>
    </Container>
  );
}
