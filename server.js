const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');
const _getResults = require('./SpotifyAPI/_getResults');
const _getAlbum = require('./SpotifyAPI/_getAlbum');

const port = process.env.PORT || 4000;

app.use(cors());
app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


/* === Routes === */
// app.get('/', (req, res) => {
//   return res.redirect('/albums')
// });

app.post('/albums', async (req, res, next) => {
  try {
    console.log('here we are again')
    const query = await req.body.query;

    if (!query) {
      const albums = null;
      return res.send(albums);
    }

    const albumList = await _getResults(query);
    const albums = await albumList.data.albums.items;
    
    return res.send(albums);
  } catch (error) {
    console.log(error);
    next();
  }
});

app.post('/albums/:id', async (req, res, next) => {
  try {
    console.log('======== we got here ========');
    const query = await req.body.query;
    
    const albumObject = await _getAlbum(query);
    const album = await albumObject.data;

    return res.send(album);
  } catch (error) {
    console.log(error);
    next();
  }
});

app.listen(port, () => {
  console.log('Listening on port:', port);
});

