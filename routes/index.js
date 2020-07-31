const express = require('express')
const router = express();

const cors = require('cors')
//router.use(cors());

router.use('/triviaQuestion', require('./triviaQuestion'));
router.use('/category', require('./category'))

module.exports = router;