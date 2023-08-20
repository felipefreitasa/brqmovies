import { ReactNode, createContext, useState } from "react";

import { api } from "@services/api";

import { getAllFavoriteMovies } from "@storage/favoriteMovies/getAllFavoriteMovies";

export type MovieProps = {
  id: number;
  title: string;
  adult: boolean;
  overview: string;
  popularity: number;
  vote_count: number;
  poster_path: string;
  release_date: string;
};

export type MoviesContextDataProps = {
  selectedMovie: MovieProps;
  popularMovies: MovieProps[];
  favoriteMovies: MovieProps[];
  isPopularMoviesLoading: boolean;
  hasErrorAtPopularMovies: boolean;
  isFavoriteMoviesLoading: boolean;
  hasErrorAtFavoriteMovies: boolean;
  fetchPopularMovies: () => Promise<void>;
  fetchFavoriteMovies: () => Promise<void>;
  setSelectedMovie: React.Dispatch<React.SetStateAction<MovieProps>>;
  setPopularMovies: React.Dispatch<React.SetStateAction<MovieProps[]>>;
  setFavoriteMovies: React.Dispatch<React.SetStateAction<MovieProps[]>>;
  setIsPopularMoviesLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setHasErrorAtPopularMovies: React.Dispatch<React.SetStateAction<boolean>>;
  setIsFavoriteMoviesLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setHasErrorAtFavoriteMovies: React.Dispatch<React.SetStateAction<boolean>>;
};

type MoviesContextProviderProps = {
  children: ReactNode;
};

export const MoviesContext = createContext<MoviesContextDataProps>(
  {} as MoviesContextDataProps
);

export function MoviesContextProvider({
  children,
}: MoviesContextProviderProps) {
  const [popularMovies, setPopularMovies] = useState<MovieProps[]>([]);
  const [favoriteMovies, setFavoriteMovies] = useState<MovieProps[]>([]);
  const [isPopularMoviesLoading, setIsPopularMoviesLoading] = useState(false);
  const [hasErrorAtPopularMovies, setHasErrorAtPopularMovies] = useState(false);
  const [isFavoriteMoviesLoading, setIsFavoriteMoviesLoading] = useState(false);
  const [hasErrorAtFavoriteMovies, setHasErrorAtFavoriteMovies] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<MovieProps>({} as MovieProps);

  async function fetchPopularMovies() {
    try {
      setIsPopularMoviesLoading(true);

      const { data } = await api.get("/3/movie/popular");
      setPopularMovies(data.results);
    } catch (error) {
      setHasErrorAtPopularMovies(true);
    } finally {
      setIsPopularMoviesLoading(false);
    }
  }

  async function fetchFavoriteMovies() {
    try {
      setIsFavoriteMoviesLoading(true);

      const favoriteMoviesData = await getAllFavoriteMovies();
      setFavoriteMovies(favoriteMoviesData);
    } catch (error) {
      setHasErrorAtFavoriteMovies(true);
    } finally {
      setIsFavoriteMoviesLoading(false);
    }
  }

  return (
    <MoviesContext.Provider
      value={{
        selectedMovie,
        popularMovies,
        favoriteMovies,
        setSelectedMovie,
        setPopularMovies,
        setFavoriteMovies,
        fetchPopularMovies,
        fetchFavoriteMovies,
        isPopularMoviesLoading,
        isFavoriteMoviesLoading, 
        hasErrorAtPopularMovies,
        hasErrorAtFavoriteMovies, 
        setIsPopularMoviesLoading,
        setIsFavoriteMoviesLoading,
        setHasErrorAtPopularMovies,
        setHasErrorAtFavoriteMovies,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}
