const router = require('express').Router();
const controller = require('../controller/controller');

router.get('/albums', controller.albums);
router.get('/album', controller.album);

module.exports = router;