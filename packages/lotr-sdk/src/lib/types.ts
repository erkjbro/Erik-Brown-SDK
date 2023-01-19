export type metaResponse = {
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
}

export type Movie = {
  _id: string;
  name: string;
  runtimeInMinutes: number;
  budgetInMillions: number;
  boxOfficeRevenueInMillions: number;
  academyAwardNominations: number;
  academyAwardWins: number;
  rottenTomatoesScore: number;
}

export type MovieQuote = {
  _id: string;
  id: string;
  movie: string;
  character: string;
  dialog: string;
}

export type MovieApiResponse = metaResponse & {
  docs: Movie[];
}

export type MovieQuoteApiResponse = metaResponse & {
  docs: MovieQuote[];
}
