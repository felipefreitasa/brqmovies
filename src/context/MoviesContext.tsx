import { ReactNode, createContext, useState } from "react";

export type MovieProps = {
  id: number;
  title: string;
  adult:  boolean;
  overview: string;
  popularity: number;
  vote_count: number;
  poster_path: string;
  release_date: string;
};

export type MoviesContextDataProps = {
  selectedMovie: MovieProps;
  setSelectedMovie: React.Dispatch<React.SetStateAction<MovieProps>>;
};

type MoviesContextProviderProps = {
  children: ReactNode;
};

export const MoviesContext = createContext<MoviesContextDataProps>(
  {} as MoviesContextDataProps
);

export function MoviesContextProvider({ children }: MoviesContextProviderProps) {
  
  const [selectedMovie, setSelectedMovie] = useState<MovieProps>({} as MovieProps);

  return (
    <MoviesContext.Provider
      value={{
        selectedMovie,
        setSelectedMovie,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}
