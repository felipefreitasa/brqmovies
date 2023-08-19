import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import { Button } from "@components/Button";

import { Container, IconContainer, Subtitle, Title } from "./styles";

type Props = {
  title: string;
  subtitle: string;
  buttonTitle?: string;
  onTryAgain?: () => void;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export function ErrorCard({ title, subtitle, buttonTitle, onTryAgain, icon }: Props) {
  const { COLORS } = useTheme();

  return (
    <Container>
      <IconContainer>
        <MaterialIcons size={40} name={icon} color={COLORS.PRIMARY} />
      </IconContainer>

      <Title>{title}</Title>

      <Subtitle>{subtitle}</Subtitle>

      {buttonTitle && onTryAgain && (
        <Button title={buttonTitle} onPress={onTryAgain} />
      )}
    </Container>
  );
}
