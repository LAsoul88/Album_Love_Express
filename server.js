const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');
const _getResults = require('./SpotifyAPI/_getResults');

const port = process.env.PORT || 4000;

app.use(cors());
app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());




/* === Routes === */
// app.get('/', (req, res) => {
//   console.log('this is happening');
// });

app.post('/', async (req, res, next) => {
  try {
    const query = await req.body.query;

    if (!query) {
      const albums = null;
      return res.send(albums);
    }

    console.log('searching for: ', query)
    const albumList = await _getResults(query);
    const albums = await albumList.data.albums.items
    
    return res.send(albums);
  } catch (error) {
    console.log(error);
    next();
  }
});

app.listen(port, () => {
  console.log('Listening on port:', port);
});
