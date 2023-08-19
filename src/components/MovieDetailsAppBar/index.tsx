import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { BackButtonContainer, Container, Title } from "./styles";

type Props = {
  title: string;
};

export function MoviesDetailsAppBar({ title }: Props) {
  const { COLORS } = useTheme();

  const { goBack } = useNavigation();

  return (
    <Container>
      <BackButtonContainer activeOpacity={0.8} onPress={goBack}>
        <MaterialCommunityIcons
          size={24}
          name="arrow-left"
          color={COLORS.PRIMARY}
        />
      </BackButtonContainer>

      <Title numberOfLines={1}>{title}</Title>
    </Container>
  );
}
