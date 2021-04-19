const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

// Auth0 configuration
const authConfig = {
  issuer: 'https://dignified.eu.auth0.com/',
  audience: 'https://api.diggyspizza.com',
  algorithms: ['RS256']
};

const secret = jwksRsa.expressJwtSecret({
  cache: true,
  rateLimit: true,
  jwksRequestsPerMinute: 5,
  jwksUri: 'https://dignified.eu.auth0.com/.well-known/jwks.json',
});

const authenticated = jwt({ secret, ...authConfig });

module.exports = { authenticated };
