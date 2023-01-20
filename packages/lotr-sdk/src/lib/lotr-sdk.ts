import * as apiTypes from './types';

type movieResponses = apiTypes.MovieApiResponse | apiTypes.MovieQuoteApiResponse;

export class theOneSdk {
  /**
   * SDK for interfacing with The One API.
   *
   * @remarks
   * This class is part of the {@link theOneSdk} package.
   *
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
    this.base_url = 'https://the-one-api.dev/v2';
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

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${this.access_token}`,
      },
    });

    if (!response.ok)
      return Promise.reject(response);

    return await response.json();
  }

  getMovieData(): Promise<apiTypes.MovieApiResponse>;
  getMovieData(_id: string): Promise<apiTypes.MovieApiResponse>;
  getMovieData(_id: string, quote: true): Promise<apiTypes.MovieQuoteApiResponse>;
  public async getMovieData(_id = '', quote = false): Promise<movieResponses> {
    /**
     * Gets movie data from the API.
     *
     * @param _id The ID of the movie to get data for.
     * @param quote Whether to get movie quote data.
     *
     * @returns Either movie or movie quote data.
     */
    try {
      const endpoint_url = `${this.base_url}/movie${_id ? `/${_id}` : ''}${(_id && quote) ? '/quote' : ''}`;
      return await this.fetchMovieData(endpoint_url);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
