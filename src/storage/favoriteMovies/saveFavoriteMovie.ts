import AsyncStorage from '@react-native-async-storage/async-storage'

import { getAllFavoriteMovies } from './getAllFavoriteMovies'
import { FAVORITE_MOVIES_COLLECTION } from '@storage/storageConfig'

import { MovieProps } from "@context/MoviesContext"

export async function saveFavoriteMovie(movie: MovieProps){
  try {
    const storedMeals = await getAllFavoriteMovies()
    
    const storage = JSON.stringify([...storedMeals, movie])

    await AsyncStorage.setItem(FAVORITE_MOVIES_COLLECTION, storage)

  } catch (error) {
    throw error
  }
}