# Erik-Brown-SDK

> v0.0.0

> This README describes the development environment used for creating the @erkjbro/the-one-sdk package.
> For package usage instructions, please see the README.md file in the package directory. (packages/lotr-sdk/README.md)

### Description

SDK for interacting with [the one API](https://the-one-api.dev/) to rule them all.

### Getting Started

Clone repo
```bash
export ONE_ACCESS_TOKEN=YOUR_TOKEN_HERE
npm ci
```

### Running the app

Remember to have your access token set so it can be pulled from the environment, or an error will be thrown.

```bash
npx nx serve lotr-app
```

### Running tests / lint / graph / build / etc

```bash
  npx nx run-many --target=test
  npx nx run-many --target=lint
  npx nx run-many --target=build
  npx nx graph
```
