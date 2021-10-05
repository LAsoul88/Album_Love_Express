const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');
const albumsRouter = require('./controllers/albums');

const port = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/albums', albumsRouter);

app.listen(port, () => {
  console.log('Listening on: ' + port);
});

module.exports = app;
