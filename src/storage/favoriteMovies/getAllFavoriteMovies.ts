import AsyncStorage from "@react-native-async-storage/async-storage"

import { FAVORITE_MOVIES_COLLECTION } from "@storage/storageConfig"

import { MovieProps } from "@context/MoviesContext"

export async function getAllFavoriteMovies(){
  try {
    const storage = await AsyncStorage.getItem(FAVORITE_MOVIES_COLLECTION)

    const favoriteMovies: MovieProps[] = storage ? JSON.parse(storage) : []

    return favoriteMovies

  } catch (error) {
    throw error
  }
}