const express = require('express');
const cors = require('cors');

const { authenticated } = require('./security');
const { species, menu } = require('./api-data');

const app = express();

const origin = process.env.CORS || 'http://localhost:3000';
app.use(cors({ origin }));

// Routes
app.get('/menu', authenticated, (req, res) => {
  res.send({ menu });
});

app.get('/species', (req, res) => {
  res.send({ species });
});

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    console.error('Request without valid token');
    res.status(401).send({ msg: 'Invalid token' });
  } else next();
});

// Start the app
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`API listening on ${port}`));
