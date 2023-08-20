import { useContext } from "react"

import { MoviesContext, MoviesContextDataProps } from "@context/MoviesContext"

export function useMovies(): MoviesContextDataProps {
  const context = useContext(MoviesContext)

  return context
}