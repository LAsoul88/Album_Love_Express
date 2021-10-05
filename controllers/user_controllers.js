const express = require('express');
const router = express.Router();
const { User } = require('../models');
const getAlbums = require('../credentials/get_albums');

router.get('/:id', async (req, res, next) => {
  try {

    const foundUser = await User.findById(req.params.id);

    const currentSession = req.session.currentUser;
    
    if (!foundUser.recordCollection[0]) {
      const context = {
        albums: null,
        session: currentSession,
        user: foundUser,
      };

      return res.render('users/show', context);
    }

    const userAlbums = await getAlbums(foundUser.recordCollection);

    const context = {
      albums: userAlbums,
      session: currentSession,
      user: foundUser,
    };

    return res.render('users/show', context);
    
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

router.put('/:id', async (req, res, next) => {
  try {

    const foundUser = await User.findById(req.params.id);

    const isInCollection = foundUser.recordCollection.includes(req.body.recordCollection);

    if (isInCollection) {
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.session.currentUser.id },
        { $pull: {
          recordCollection: req.body.recordCollection
        }}
      );
      
      return res.redirect(`/albums/${req.body.recordCollection}`);
    };

    const updatedUser = await User.findOneAndUpdate(
      { _id: req.session.currentUser.id },
      { $push: {
        recordCollection: req.body.recordCollection }}
    );
    
    return res.redirect(`/albums/${req.body.recordCollection}`);
    
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

router.put('/:id/avatar', async (req, res, next) => {
  try {

    const updatedUser = await User.findOneAndUpdate(
      { _id: req.session.currentUser.id },
      { avatar: req.body.avatar }
    );
      
    return res.redirect(`/users/${req.params.id}`);

  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

module.exports = router;