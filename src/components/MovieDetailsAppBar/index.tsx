import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import { BackButtonContainer, Container, Title } from "./styles";

type Props = {
  title: string;
  isFavoriteMovie: boolean;
  addMovieToFavoriteList: () => void;
};

export function MoviesDetailsAppBar({ title, addMovieToFavoriteList, isFavoriteMovie }: Props) {
  const { COLORS } = useTheme();

  const { goBack } = useNavigation();

  return (
    <Container>
      <BackButtonContainer onPress={goBack}>
        <MaterialCommunityIcons
          size={24}
          name="arrow-left"
          color={COLORS.PRIMARY}
        />
      </BackButtonContainer>

      <Title numberOfLines={1}>{title}</Title>

      <BackButtonContainer onPress={addMovieToFavoriteList}>
        <MaterialIcons
          size={24}
          color={COLORS.PRIMARY}
          name={isFavoriteMovie ? 'favorite' : "favorite-outline"}
        />
      </BackButtonContainer>
    </Container>
  );
}
