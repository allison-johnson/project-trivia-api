const express = require('express')
const router = express();

//router.use(require('./triviaQuestion'));
router.use('/category', require('./category'))

module.exports = router;