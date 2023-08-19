import React, { useEffect, useState } from "react";
import { BackHandler, FlatList } from "react-native";

import { api } from "@services/api";

import { useMovies } from "@hooks/useMovies";

import { MovieProps } from "@context/MoviesContext";

import { AppBar } from "@components/AppBar";
import { Loading } from "@components/Loading";
import { MovieCard } from "@components/MovieCard";
import { ErrorCard } from "@components/ErrorCard";

import { Container } from "./styles";

export function Home() {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [popularMovies, setPopularMovies] = useState<MovieProps[]>([]);

  const { setSelectedMovie } = useMovies();

  async function fetchPopularMovies() {
    try {
      setIsLoading(true);

      const { data } = await api.get("/3/movie/popular");
      setPopularMovies(data.results);

    } catch (error) {
      setHasError(true);
      
    } finally {
      setIsLoading(false);
    }
  }

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

  return (
    <>
      <AppBar />

      <Container>
        {!hasError ? (
          <>
            {isLoading ? (
              <Loading />
            ) : (
              <FlatList
                numColumns={2}
                data={popularMovies}
                style={{ width: "100%", paddingHorizontal: 8 }}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <MovieCard
                    item={item}
                    onPress={() => setSelectedMovie(item)}
                  />
                )}
              />
            )}
          </>
        ) : (
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
        )}
      </Container>
    </>
  );
}
