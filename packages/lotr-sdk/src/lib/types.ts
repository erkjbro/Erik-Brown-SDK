export type MetaResponse = {
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

export type MovieApiResponse = MetaResponse & {
  docs: Movie[];
}

export type MovieQuoteApiResponse = MetaResponse & {
  docs: MovieQuote[];
}

export type PaginationParams = {
  limit?: number;
  page?: number;
  offset?: number;
}

export type SortingParams = {
  sort?: string;
};

export type FilteringParams = {
  filter?: string;
};

export type MetaParams = PaginationParams & SortingParams & FilteringParams;

export type MovieParams = MetaParams & {
  movieId?: string;
  quote?: boolean;
  limit?: number;
  page?: number;
}
