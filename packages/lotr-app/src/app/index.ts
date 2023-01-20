import { theOneSdk } from '@erkjbro/the-one-sdk';

const API_KEY = process.env.ONE_ACCESS_TOKEN || '';

export const runSdk = async () => {
  const sdk = new theOneSdk(API_KEY);

  try {
    const movies = await sdk.getMovieData();
    console.log(movies.docs.length, 'movies found.');

    const movieId = movies.docs[5]._id;

    const movie = await sdk.getMovieData(movieId);
    console.log(movie.docs[0]);

    const movieQuotes = await sdk.getMovieData(
      movieId,
      true,
    );
    console.log(movieQuotes.docs[1].dialog);
  } catch (error) {
    console.error(error);
  }
};
