import { MOVIE_DB_API_IMAGE } from '@env'

import { Container, Poster } from "./styles";

export type MovieProps = {
  id: number;
  poster_path: string;
};

export function MovieCard({ poster_path }: MovieProps){
  return (
    <Container activeOpacity={0.8}>
      <Poster source={{ uri: `${MOVIE_DB_API_IMAGE}${poster_path}` }}/>
    </Container>
  )
}