import { theOneSdk } from '@erkjbro/the-one-sdk';

const API_KEY = process.env.ONE_ACCESS_TOKEN || '';

export const runSdk = async () => {
  const sdk = new theOneSdk(API_KEY);

  const movieData = await sdk.getMovieData('5cd95395de30eff6ebccde5b', true);

  console.log(movieData);
};
