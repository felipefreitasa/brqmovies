import { MovieProps } from "@context/MoviesContext";

import { saveFavoriteMovie } from "@storage/favoriteMovies/saveFavoriteMovie";
import { removeFavoriteMovie } from "@storage/favoriteMovies/removeFavoriteMovie";
import { getAllFavoriteMovies } from "@storage/favoriteMovies/getAllFavoriteMovies";

describe("Storage: favorite movies", () => {
  const newFavoriteMovie: MovieProps = {
    id: 976573,
    title: "Elemental",
    adult: false,
    overview:
      "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
    popularity: 4696.546,
    vote_count: 1050,
    poster_path: "/6oH378KUfCEitzJkm07r97L0RsZ.jpg",
    release_date: "2023-06-14",
  };

  it("should return an empty array when do not have stored favorite movies", async () => {
    const response = await getAllFavoriteMovies();
    expect(response).toEqual([]);
  });

  it("should return stored favorite movies", async () => {
    await saveFavoriteMovie(newFavoriteMovie);

    const response = await getAllFavoriteMovies();
    expect(response).toEqual([newFavoriteMovie]);
  });

  it("should remove stored favorite movies", async () => {
    await saveFavoriteMovie(newFavoriteMovie);
    await removeFavoriteMovie(newFavoriteMovie);

    const response = await getAllFavoriteMovies();
    expect(response).toEqual([]);
  });
});
