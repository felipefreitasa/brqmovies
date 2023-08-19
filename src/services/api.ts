import axios from "axios";

import { MOVIE_DB_API, MOVIE_DB_API_KEY } from "@env";

export const api = axios.create({
  baseURL: MOVIE_DB_API,
  params: {
    api_key: MOVIE_DB_API_KEY,
  },
});
