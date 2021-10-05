const express = require('express');
const router = express.Router();
const searchQuery = require('../credentials/spotify_search');
const getAlbum = require('../credentials/get_album');
const getAlbums = require('../credentials/get_albums');
const { Comment, User } = require('../models');

router.get('/', async (req, res, next) => {
  try {

    const foundComments = await Comment.find({}).populate("userId").sort({ createdAt: -1 });
    
    const albumIds = await foundComments.map((comment) => {
      return comment.albumId
    });
    
    const commentAlbums = await getAlbums(albumIds);

    const currentSession = req.session.currentUser;

    if (!req.query.search) {
      const context = {
        albums: null,
        comments: foundComments,
        commentAlbums: commentAlbums,
        session: currentSession,
        user: currentSession,
      };
      
      return res.render('albums/index', context);
    }

    const foundAlbums = await searchQuery(req.query.search);

    const context = {
      albums: foundAlbums,
      comments: foundComments,
      commentAlbums: commentAlbums,
      session: currentSession,
      user: currentSession,
    };

    return res.render('albums/index', context);

  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    
    const foundAlbum = await getAlbum(req.params.id);
    
    const foundComments = await Comment.find({
      albumId: req.params.id,
    }).populate("userId");

    const currentSession = req.session.currentUser;

    let foundUser = null;
    let isInCollection = false;

    if (currentSession) {
      foundUser = await User.findById(currentSession.id);

      isInCollection = foundUser.recordCollection.includes(req.params.id);
    }

    const context = {
      album: foundAlbum,
      comments: foundComments,
      session: currentSession,
      user: foundUser,
      isInCollection: isInCollection
    };

    return res.render('albums/show', context);

  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

router.post('/:id', async (req, res, next) => {
  try {
    const createdComment = await Comment.create({
    content: req.body.content,
    timestamp: new Date().toLocaleTimeString(),
    userId: req.session.currentUser.id,
    albumId: req.params.id,
    });

    return res.redirect(`/albums/${createdComment.albumId}`);

  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    
    const updatedComment = await Comment.findByIdAndUpdate(
      req.body.edit_id,
      { $set: {
        ...req.body
      }},
      { new: true }
    );
    
    return res.redirect(`/albums/${req.params.id}`);
    
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
}); 

module.exports = router;