import { TouchableOpacityProps } from "react-native";

import { MOVIE_DB_API_IMAGE } from "@env";

import { MovieProps } from "@context/MoviesContext";

import { Container, Poster } from "./styles";

export type Props = TouchableOpacityProps & {
  item: MovieProps;
};

export function MovieCard({ item, ...rest }: Props) {
  return (
    <Container activeOpacity={0.8} {...rest}>
      <Poster source={{ uri: `${MOVIE_DB_API_IMAGE}${item.poster_path}` }} />
    </Container>
  );
}
