const router = require('express').Router();
const { postVote, getMotions } = require('../controllers/MotionController.js');

router.get('/', getMotions);
router.post('/vote', postVote);

module.exports = router;