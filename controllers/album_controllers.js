const express = require('express');
const router = express.Router();

const _getResults = require('../credentials/_getResults');

router.get('/home', async (req, res, next) => {
  
  try {

    console.log(req.query);
    if (!req.query.search) {
      console.log('=====no search=====')
      res.status(200).json({
        data: []
      })
    } else {
      console.log('=====here is a search=====')
      
      
      const foundAlbums = await _getResults(req.query.search);
      console.log('FOUND ALBUMS', foundAlbums)
  
      res.status(200).json({
        data: foundAlbums
      });
    }
  } catch (error) {
    console.log(request.data)
    res.status(400).json({
      message: 'An error occurred',
      error
    });
    return next();
  }
});

// router.get('/:id', async (req, res, next) => {
//   let { id } = req.params;
//   id = Number(id);
//   try {
//     const album = albums.find(album => album._id === id);
//     res.status(200).json({
//       data: album
//     });
//   } catch (error) {
//     res.status(400).json({
//       message: 'An error occurred',
//       error
//     });
//     return next();
//   }
// });

module.exports = router;