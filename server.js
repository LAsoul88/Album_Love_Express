const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');
require('./config/db_connection');
require('dotenv').config();

const port = process.env.PORT || 4000;

app.use(cors());
app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


/* === Routes === */
app.use('/api', require('./router/router'));

app.listen(port, () => {
  console.log('Listening on port:', port);
});

