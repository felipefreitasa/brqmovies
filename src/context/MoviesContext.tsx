import { ReactNode, createContext, useState } from "react";

import { api } from "@services/api";

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
  hasError: boolean;
  isLoading: boolean;
  selectedMovie: MovieProps;
  popularMovies: MovieProps[];
  fetchPopularMovies: () => Promise<void>;
  setHasError: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedMovie: React.Dispatch<React.SetStateAction<MovieProps>>;
  setPopularMovies: React.Dispatch<React.SetStateAction<MovieProps[]>>;
};

type MoviesContextProviderProps = {
  children: ReactNode;
};

export const MoviesContext = createContext<MoviesContextDataProps>(
  {} as MoviesContextDataProps
);

export function MoviesContextProvider({ children }: MoviesContextProviderProps) {
  
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [popularMovies, setPopularMovies] = useState<MovieProps[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<MovieProps>({} as MovieProps);

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

  return (
    <MoviesContext.Provider
      value={{
        hasError,
        isLoading,
        setHasError,
        setIsLoading,
        selectedMovie,
        popularMovies,
        setSelectedMovie,
        setPopularMovies,
        fetchPopularMovies,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}
