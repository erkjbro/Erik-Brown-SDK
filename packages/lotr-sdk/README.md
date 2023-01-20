# @erkjbro/the-one-sdk

### Description

SDK for interacting with [the one API](https://the-one-api.dev/) to rule them all.

### Getting Started

You need an account to obtain an access token to be used with the API. You can get one [here](https://the-one-api.dev/sign-up).

### Installation

This package is available [here](https://www.npmjs.com/package/@erkjbro/the-one-sdk) on npm. 
You can install it with the following command:

```bash
npm i -S @erkjbro/the-one-sdk
```

### Usage
```ts
const { TheOneSdk } = require("@erkjbro/the-one-sdk");

const sdk = new TheOneSdk(YOUR_ACCESS_TOKEN_HERE);

// Get all movies
const movies = await sdk.getMovieData();

// Get specific movie by id
const movie = await sdk.getMovieData({ 
  movieId: 'id_for_lotr_movie' 
});

// Get all quotes for specific movie by id
const movieQuotes = await sdk.getMovieData({
  movieId: 'id_for_lotr_movie',
  quote: true,
});
```
