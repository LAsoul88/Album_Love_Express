const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/', ctrl.albums.index);
router.get('/:id', ctrl.albums.show);

module.exports = router;