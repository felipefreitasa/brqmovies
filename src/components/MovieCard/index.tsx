import { TouchableOpacityProps } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

import { MOVIE_DB_API_IMAGE } from "@env";

import { MovieProps } from "@context/MoviesContext";

import { Container, Poster } from "./styles";

export type Props = TouchableOpacityProps & {
  item: MovieProps;
};

export function MovieCard({ item, ...rest }: Props) {
  return (
    <Container testID="movie-card-poster" activeOpacity={0.8} {...rest}>
      <Animated.View entering={FadeIn.duration(600)}>
        <Poster source={{ uri: `${MOVIE_DB_API_IMAGE}${item.poster_path}` }} />
      </Animated.View>
    </Container>
  );
}
