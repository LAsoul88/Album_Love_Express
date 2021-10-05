const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { User } = require('../models');

router.get('/register', (req, res) => {

  if (!req.session.currentUser) {
    const context = {
      username: false,
      email: false,
      password: false,
      session: null,
    }

    return res.render('auth/register', context);
  }

  const context = {
    username: false,
    email: false,
    password: false,
    session: req.session.currentUser,
  }

  return res.render('auth/register', context);
});

router.get('/login', (req, res) => {

  if (!req.session.currentUser) {
    const context = {
      mismatch: false,
      session: null,
    }

    return res.render('auth/login', context);
  }

  const context = {
    mismatch: false,
    session: req.session.currentUser,
  }

  return res.render('auth/login', context);
});



router.post('/register', async (req, res) => {
  try {

    const foundUser = await User.exists({
      username: req.body.username
    });

    if (foundUser) {
      const context = {
        username: true,
        email: false,
        password: false,
        session: null,
      }
      return res.render('auth/register', context);
    }

    const foundEmail = await User.exists({
      email: req.body.email
    });

    if (foundEmail) {
      const context = {
        username: false,
        email: true,
        password: false,
        session: null,
      }

      return res.render('auth/register', context);
    }

    if (req.body.password_confirm !== req.body.password) {
      const context = {
        username: false,
        email: false,
        password: true,
        session: null,
      }

      return res.render('auth/register', context);
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    req.body.password = hash;

    const newUser = await User.create(req.body);
    return res.redirect('/login');

  } catch (error) {
    console.log(error);
    return res.send(error);
  }
});

router.post('/login', async (req, res) => {
  try {

    const foundUser = await User.find({
      email: req.body.email
    });

    if (foundUser.length < 1) {
      const context = {
        mismatch: true,
        session: null
      }

      return res.render('auth/login', context);
    }

    const match = await bcrypt.compare(req.body.password, foundUser[0].password);

    if (!match) {
      const context = {
        mismatch: true,
        session: null
      }

      return res.render('auth/login', context);
    }

    req.session.currentUser = {
      id: foundUser[0]._id,
      username: foundUser[0].username,
      email: foundUser[0].email,
      avatar: foundUser[0].avatar,
    };
  
    return res.redirect(`/albums`);

  } catch (error) {
    console.log(error);
    return res.send(error);
  }
});

router.get('/logout', async (req, res) => {
  try {

    await req.session.destroy();
    return res.redirect('/login');

  } catch (error) {
    console.log(error);
    return res.send(error);
  }
});


module.exports = router;