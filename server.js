const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');
const routes = require('./routes');

require('dotenv').config();

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* === Routes === */
app.use('/home', routes.albums);

app.listen(PORT, () => {
  console.log('Listening on port:', PORT);
});

module.exports = app;
