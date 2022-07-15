const express = require('express');
const router = express.Router();
const { Comment, User } = require('../models');
const _getResults = require('../SpotifyAPI/_getResults');

router.post('/albums', async (req, res, next) => {
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

router.post('/albums/:id', async (req, res, next) => {
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

module.exports = router;