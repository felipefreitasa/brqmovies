import { useState } from "react";
import { ScrollView } from "react-native";

import { MOVIE_DB_API_IMAGE } from "@env";

import { useMovies } from "@hooks/useMovies";

import { formatDateToBrazilianFormat } from "@utils/formatDateToBrazilianFormat";

import { saveFavoriteMovie } from "@storage/favoriteMovies/saveFavoriteMovie";
import { removeFavoriteMovie } from "@storage/favoriteMovies/removeFavoriteMovie";

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
  
  const { selectedMovie, favoriteMovies } = useMovies();

  const isFavoriteMovie = favoriteMovies.some((movie) => movie.id === selectedMovie.id)

  const [isFavorite, setIsFavorite] = useState(isFavoriteMovie) 

  async function handleFavoriteMovie(){
    if (isFavorite){
      setIsFavorite(false)
      await removeFavoriteMovie(selectedMovie)
    } else {
      setIsFavorite(true)
      await saveFavoriteMovie(selectedMovie)
    }
  }

  return (
    <>
      <MoviesDetailsAppBar 
        title={selectedMovie.title}
        isFavoriteMovie={isFavorite}
        addMovieToFavoriteList={handleFavoriteMovie}
      />

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
