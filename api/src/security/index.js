const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

// Auth0 configuration
const authConfig = {
  issuer: 'https://spa-test.auth0.com/',
  audience: 'https://api.allthingsauth.dev',
  algorithms: ['RS256'],
};

const secret = jwksRsa.expressJwtSecret({
  cache: true,
  rateLimit: true,
  jwksRequestsPerMinute: 5,
  jwksUri: `${authConfig.issuer}.well-known/jwks.json`,
});

const authenticated = jwt({ secret, ...authConfig });

module.exports = { authenticated };
