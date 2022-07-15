// const router = require('express').Router();
// const { Comment, User } = require('../models');
// const _getResults = require('../SpotifyAPI/_getResults');
// const _getAlbums = require('../SpotifyAPI/_getAlbums');

// router.get('/albums', async (req, res, next) => {
//   try {
//     const query = req.body.query;

//     const foundComments = await Comment.find({})
//                                        .populate("userId")
//                                        .sort({ createdAt: -1 });

//     const albumIds = await foundComments.map(comment => {
//       return comment.albumId;
//     });

//     const commentAlbums = await _getAlbums(albumIds);

//     const albumList = await _getResults(query);
//     const albums = albumList.data.albums.items || null;

//     const context = {
//       albums: albums,
//       comments: foundComments,
//       commentAlbums: commentAlbums,
//     }
//     console.log("context:", context);
//     return res.send(context);
//   } catch (error) {
//     console.log(error);
//     next();
//   }
// });

// router.post('/albums/:id', async (req, res, next) => {
//   try {
//     const query = await req.body.query;

//     const albumObject = await _getAlbum(query);
//     const album = await albumObject.data;

//     return res.send(album);
//   } catch (error) {
//     console.log(error);
//     next();
//   }
// });

// module.exports = router;