import { render } from "@testing-library/react-native";

import { MovieProps } from "@context/MoviesContext";

import { MovieCard } from "@components/MovieCard";

describe("Component: MovieCard", () => {
  const mockItem: MovieProps = {
    id: 976573,
    title: "Elemental",
    poster_path: "/6oH378KUfCEitzJkm07r97L0RsZ.jpg",
    adult: false,
    overview:
      "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
    popularity: 4696.54,
    release_date: "2023-06-14",
    vote_count: 22350,
  };

  it("should render the movie poster correctly", () => {
    const { getByTestId } = render(<MovieCard item={mockItem} />);
    const posterElement = getByTestId("movie-card-poster");

    expect(posterElement).toBeTruthy();
  });
});
