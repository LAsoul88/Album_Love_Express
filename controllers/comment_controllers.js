const express = require('express');
const router = express.Router();
const getAlbum = require('../credentials/get_album').default;
const { Comment } = require('../models');

router.delete('/:id', async (req, res, next) => {
  try {
  
    const foundComment = await Comment.findById({ _id: req.params.id });

    const foundAlbum = await getAlbum(foundComment.albumId);
    
    const deletedComment = await Comment.findByIdAndDelete(req.params.id);

    return res.redirect(`/albums/${foundAlbum.id}`);

  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

module.exports = router;