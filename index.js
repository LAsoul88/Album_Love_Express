const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');
const controllers = require('./controllers');

require('dotenv').config();

const port = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* === Routes === */
app.use('/albums', controllers.album);

app.listen(port, () => {
  console.log('Listening on: ' + port);
});

module.exports = app;
