import * as apiTypes from './types';
import { API_BASE_URL } from './constants';

type movieResponses = apiTypes.MovieApiResponse | apiTypes.MovieQuoteApiResponse;

export class TheOneSdk {
  /**
   * SDK for interfacing with The One API.
   *
   * @remarks
   * This class is part of the {@link TheOneSdk} package.
   *
   * @class
   * @param access_token The access token for the API.
   * @param base_url The base URL for the API.
   *
   * @private fetchMovieData Fetches movie data from the API.
   * @public getMovieData Gets movie data from the API.
   */
  private readonly access_token: string;
  private readonly base_url: string;

  constructor(access_token: string) {
    this.access_token = access_token;
    this.base_url = API_BASE_URL;
  }

  private async fetchMovieData(url: string): Promise<movieResponses> {
    /**
     * Fetches movie data from the API.
     *
     * @param url The URL to fetch data from.
     * @returns Either movie or movie quote data.
     */
    if (!this.access_token)
      throw new Error('No access token provided.');

    const init = {
      headers: {
        Authorization: `Bearer ${this.access_token}`,
      },
    };

    const response = await fetch(url, init);

    if (!response.ok)
      return Promise.reject(response);

    return await response.json();
  }

  getMovieData(): Promise<apiTypes.MovieApiResponse>;
  getMovieData({ movieId }: { movieId: string }): Promise<apiTypes.MovieApiResponse>;
  getMovieData({ movieId, quote }: apiTypes.MovieParams): Promise<apiTypes.MovieQuoteApiResponse>;
  public async getMovieData(params?: apiTypes.MovieParams): Promise<movieResponses> {
    /**
     * Gets movie data from the API.
     *
     * @typedef {Object} MovieParams
     * @property {string} movieId [] The ID of the movie to get data for.
     * @property {boolean} quote [] Whether to get movie quotes or not.
     *
     * @param {...MovieParams} [] The parameters to use when fetching data.
     *
     * @returns Either movie or movie quote data.
     */
    try {
      const { movieId, quote, limit, page } = params ?? {};

      const endpoint_url = `${this.base_url}/movie` +
        `${movieId ? `/${movieId}` : ''}` +
        `${(movieId && quote) ? '/quote' : ''}` +
        `?limit=${limit ?? 100}` +
        `${page ? `&page=${page}` : ''}`;

      return await this.fetchMovieData(endpoint_url);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
