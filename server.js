const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');
const _getResults = require('./SpotifyAPI/_getResults');
const _getAlbum = require('./SpotifyAPI/_getAlbum');

const port = process.env.PORT || 4000;

const controllers = require('./controllers');

app.use(cors());
app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


/* === Routes === */
// app.use('/', controllers.auth);
app.use('/albums', controllers.album);
// app.use('/comments', controllers.comment);
// app.use('/users', controllers.user);

app.post('/albums', async (req, res, next) => {
  try {
    const query = req.body.query;

    if (!query) {
      const albums = null;
      return res.send(albums);
    }

    const albumList = await _getResults(query);
    const albums = albumList.data.albums.items;
    
    return res.send(albums);
  } catch (error) {
    console.log(error);
    next();
  }
});

app.post('/albums/:id', async (req, res, next) => {
  try {
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

