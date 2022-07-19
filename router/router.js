const router = require('express').Router();
const controller = require('../controller/controller');

router.get('/albums', controller.albums);
router.get('/album', controller.album);
router.get('/comments', controller.comments);

module.exports = router;