import { api } from "@services/api";

import { MovieProps } from "@context/MoviesContext";

describe("API", () => {
  it("should fetch all popular movies", async () => {
    
    const data: MovieProps[] = [
      {
        id: 976573,
        title: "Elemental",
        adult: false,
        overview:
          "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
        popularity: 4696.546,
        vote_count: 1050,
        poster_path: "/6oH378KUfCEitzJkm07r97L0RsZ.jpg",
        release_date: "2023-06-14",
      },
      {
        id: 569094,
        title: "Spider-Man: Across the Spider-Verse",
        adult: false,
        overview:
          "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
        popularity: 3296.546,
        vote_count: 1050,
        poster_path: "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
        release_date: "2023-01-12",
      },
    ];

    jest.spyOn(api, "get").mockResolvedValue({ data });

    const response = await api.get("/3/movie/popular");

    expect(response.data.length).toBeGreaterThan(1)
  });
});
