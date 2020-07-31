const express = require('express')
const router = express();
const cors = require('cors')
//To use or not to use?
router.use(cors());

router.use('/triviaQuestion', require('./triviaQuestion'));
router.use('/category', require('./category'))

module.exports = router;