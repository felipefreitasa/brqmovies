import { useState } from "react";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  interpolate,
  useSharedValue,
  useAnimatedStyle,
  interpolateColor,
  useAnimatedScrollHandler,
} from "react-native-reanimated";

import { MOVIE_DB_API_IMAGE } from "@env";

import { useMovies } from "@hooks/useMovies";

import { formatDateToBrazilianFormat } from "@utils/formatDateToBrazilianFormat";

import { saveFavoriteMovie } from "@storage/favoriteMovies/saveFavoriteMovie";
import { removeFavoriteMovie } from "@storage/favoriteMovies/removeFavoriteMovie";

import { IconButton } from "@components/IconButton";
import { MovieDetailsCard } from "@components/MovieDetailsCard";

import {
  Poster,
  Header,
  Content,
  Overview,
  Container,
  HeaderTitle,
  SynopsisLabel,
  OriginalTitle,
  CardsContainer,
} from "./styles";

const AnimatedHeader = Animated.createAnimatedComponent(Header);
const AnimatedHeaderTitle = Animated.createAnimatedComponent(HeaderTitle);

export function MovieDetails() {
  const { COLORS } = useTheme();

  const { goBack } = useNavigation();

  const { selectedMovie, favoriteMovies } = useMovies();

  const isFavoriteMovie = favoriteMovies.some(
    (movie) => movie.id === selectedMovie.id
  );

  const [isFavorite, setIsFavorite] = useState(isFavoriteMovie);

  async function handleFavoriteMovie() {
    if (isFavorite) {
      setIsFavorite(false);
      await removeFavoriteMovie(selectedMovie);
    } else {
      setIsFavorite(true);
      await saveFavoriteMovie(selectedMovie);
    }
  }

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const animatedHeaderStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        scrollY.value,
        [50, 120],
        ["transparent", COLORS.BACKGROUND_SECONDARY]
      ),
    };
  });

  const animatedHeaderTitleStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value, 
        [50, 120], 
        [0, 1]
      ),
    };
  });

  return (
    <>
      <AnimatedHeader style={animatedHeaderStyles}>
        <IconButton onPress={goBack} icon="chevron-left" />

        <AnimatedHeaderTitle
          numberOfLines={1}
          style={animatedHeaderTitleStyles}
        >
          {selectedMovie.title}
        </AnimatedHeaderTitle>

        <IconButton
          onPress={handleFavoriteMovie}
          icon={isFavorite ? "favorite" : "favorite-outline"}
        />
      </AnimatedHeader>

      <Animated.ScrollView
        bounces={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Container>
          <Poster
            source={{
              uri: `${MOVIE_DB_API_IMAGE}${selectedMovie.poster_path}`,
            }}
          />

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
      </Animated.ScrollView>
    </>
  );
}
