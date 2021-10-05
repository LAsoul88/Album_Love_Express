const express = require('express');
const router = express.Router();

const albums = require('../dummyDatabase');

router.get('/home', async (req, res, next) => {
  try {
    res.status(200).json({
      data: albums
    });
  } catch (error) {
    res.status(400).json({
      message: 'An error occurred',
      error
    });
    return next();
  }
});

router.get('/:id', async (req, res, next) => {
  let { id } = req.params;
  id = Number(id);
  try {
    const album = albums.find(album => album._id === id);
    res.status(200).json({
      data: album
    });
  } catch (error) {
    res.status(400).json({
      message: 'An error occurred',
      error
    });
    return next();
  }
});

module.exports = router;