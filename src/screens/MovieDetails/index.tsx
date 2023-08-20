import { ScrollView } from "react-native";

import { MOVIE_DB_API_IMAGE } from "@env";

import { useMovies } from "@hooks/useMovies";

import { formatDateToBrazilianFormat } from "@utils/formatDateToBrazilianFormat";

import { MovieDetailsCard } from "@components/MovieDetailsCard";
import { MoviesDetailsAppBar } from "@components/MovieDetailsAppBar";

import {
  Poster,
  Content,
  Overview,
  Container,
  SynopsisLabel,
  OriginalTitle,
  CardsContainer,
} from "./styles";

export function MovieDetails() {
  
  const { selectedMovie } = useMovies();

  return (
    <>
      <MoviesDetailsAppBar title={selectedMovie.title}/>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }} bounces={false}>
        <Container>
          <Poster source={{ uri: `${MOVIE_DB_API_IMAGE}${selectedMovie.poster_path}` }} />

          <Content>
            <OriginalTitle>{selectedMovie.title}</OriginalTitle>

            <SynopsisLabel>SINOPSE</SynopsisLabel>

            <Overview>{selectedMovie.overview}</Overview>

            <CardsContainer>
              <MovieDetailsCard
                label="Popularidade"
                icon="favorite-outline"
                description={selectedMovie.popularity}
              />

              <MovieDetailsCard
                label="Votos"
                icon="star-outline"
                description={selectedMovie.vote_count}
              />

              <MovieDetailsCard
                label="Lançamento"
                icon="date-range"
                description={formatDateToBrazilianFormat(
                  selectedMovie.release_date
                )}
              />

              <MovieDetailsCard
                label="Filme adulto ?"
                icon="help-outline"
                description={selectedMovie.adult ? "Sim" : "Não"}
              />
            </CardsContainer>
          </Content>
        </Container>
      </ScrollView>
    </>
  );
}
