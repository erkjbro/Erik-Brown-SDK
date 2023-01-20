import { theOneSdk } from '@erkjbro/the-one-sdk';

const API_KEY = process.env.ONE_ACCESS_TOKEN ?? '';
const MOVIE_ID = '5cd95395de30eff6ebccde5b';

export const runSdk = async () => {
  const sdk = new theOneSdk(API_KEY);

  try {
    const movies = await sdk.getMovieData();
    console.log(movies.docs.length, 'movies found.');

    const movieId = movies?.docs[movies.docs.length - 1]?._id ?? MOVIE_ID;

    const movie = await sdk.getMovieData({ movieId });
    console.log(movie?.docs[0]?.name);

    const movieQuotes = await sdk.getMovieData({
      movieId,
      quote: true,
    });
    console.log(movieQuotes?.docs[1]?.dialog ?? []);
  } catch (error) {
    console.error(error);
  }
};
