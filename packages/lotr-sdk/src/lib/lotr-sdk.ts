import * as apiTypes from './types';

export class theOneSdk {
  private readonly access_token: string;

  constructor(access_token: string) {
    this.access_token = access_token;
  }

  private async fetchMovieData(url: string): Promise<apiTypes.MovieApiResponse | apiTypes.MovieQuoteApiResponse> {
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${this.access_token}`
        }
      });

      if (!response.ok)
        return Promise.reject(response);

      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  public async getMovieData(_id = '', quote = false): Promise<apiTypes.MovieApiResponse | apiTypes.MovieQuoteApiResponse | undefined> {
    try {
      const endpoint_url = `https://the-one-api.dev/v2/movie${_id ? `/${_id}` : ''}${(_id && quote) ? '/quote' : ''}`;
      console.log(endpoint_url)
      return await this.fetchMovieData(endpoint_url);
    } catch (error) {
      console.error(error);
      return;
    }
  }
}
