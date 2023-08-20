import { useEffect } from "react";
import { BackHandler, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useMovies } from "@hooks/useMovies";

import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { Loading } from "@components/Loading";
import { MovieCard } from "@components/MovieCard";
import { ErrorCard } from "@components/ErrorCard";

import { Container } from "./styles";

export function Home() {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>();

  const {
    hasError,
    isLoading,
    setHasError,
    popularMovies,
    setSelectedMovie,
    fetchPopularMovies,
  } = useMovies();

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => null
    );
    return () => backHandler.remove();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (hasError) {
    return (
      <ErrorCard
        icon="error"
        title="Erro ao carregar lista de filmes"
        subtitle="Estamos resolvendo o problema. Por favor, tente novamente."
        buttonTitle="Tentar novamente"
        onTryAgain={() => {
          setHasError(false);
          fetchPopularMovies();
        }}
      />
    );
  }

  return (
    <Container>
      <FlatList
        numColumns={2}
        data={popularMovies}
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
      />
    </Container>
  );
}
