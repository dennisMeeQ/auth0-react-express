const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

// Auth0 configuration
const authConfig = {
  domain: 'spa-test.auth0.com',
  audience: 'https://api.allthingsauth.dev',
};

const authenticated = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`,
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithm: ['RS256'],
});

module.exports = { authenticated };
