import { useCallback } from "react";
import { FlatList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { useMovies } from "@hooks/useMovies";

import { Loading } from "@components/Loading";
import { MovieCard } from "@components/MovieCard";
import { ErrorCard } from "@components/ErrorCard";

import { Container } from "./styles";

export function FavoriteMovies() {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>();

  const { isFavoriteMoviesLoading, favoriteMovies, setSelectedMovie, fetchFavoriteMovies } = useMovies();

  useFocusEffect(
    useCallback(() => {
      fetchFavoriteMovies();
    }, [])
  )

  if (isFavoriteMoviesLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <FlatList
        numColumns={2}
        data={favoriteMovies}
        keyExtractor={(item) => item.id.toString()}
        style={{ width: "100%", paddingHorizontal: 8 }}
        renderItem={({ item }) => (
          <MovieCard
            item={item}
            onPress={() => {
              setSelectedMovie(item);
              navigate("movieDetails");
            }}
          />
        )}
        contentContainerStyle={favoriteMovies.length === 0 && { flex: 1 }}
        ListEmptyComponent={
          <ErrorCard
            icon="favorite"
            title="Nenhum filme favorito"
            subtitle="Explore uma seleção de filmes emocionantes para adicionar à sua lista de favoritos!"
          />
        }
      />
    </Container>
  );
}
