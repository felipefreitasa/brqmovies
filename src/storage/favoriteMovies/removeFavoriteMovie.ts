import AsyncStorage from "@react-native-async-storage/async-storage"

import { FAVORITE_MOVIES_COLLECTION } from "@storage/storageConfig"

import { getAllFavoriteMovies } from './getAllFavoriteMovies'

import { MovieProps } from "@context/MoviesContext"

export async function removeFavoriteMovie(movie: MovieProps){
  try {

    const storedMovies = await getAllFavoriteMovies()

    const filteredMovies = storedMovies.filter(favoriteMovies => favoriteMovies.id !== movie.id)

    await AsyncStorage.setItem(FAVORITE_MOVIES_COLLECTION, JSON.stringify(filteredMovies))
    
  } catch (error) {
    throw error
  }
}