[![Known Vulnerabilities](https://snyk.io/test/github/dennisMeeQ/auth0-react-express/badge.svg?targetFile=api/package.json)](https://snyk.io/test/github/dennisMeeQ/auth0-react-express?targetFile=api/package.json)

# React with node.js and Auth0

An example implementation of OAuth/OIDC flows in single applications using Auth0, React and Express.

Please refer to [this article](https://medium.com/better-programming/how-to-securely-implement-authentication-in-single-page-applications-670534da746f) for further details.

## Try it online

Visit https://spa-auth0.herokuapp.com and test the application yourself.

The API is deployed at https://api-auth0.herokuapp.com/species.

## Authentication

The application uses Auth0 as an authentication server. Feel free to register your own user (can be with a fake email address).

## Start locally

The application consists of a node.js API and a React frontend. Start the API first:

```
cd api
npm install
npm start
```

Then start the frontend:

```
cd ../client
npm install
npm start
```

Your browser should automatically open at http://localhost:3000.

## Docker

The frontend and the API both run in Docker on Heroku. This is the main goal of the provided Docker images. Unfortunately, Heroku behaved a little funky on me at times which is why the the docker containers might behave a little funky on you if not run on Heroku. Buy be a beer and I'll happily elaborate 🍺.
