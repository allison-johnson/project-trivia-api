const router = require('express')();
const triviaQuestionController = require('../controllers/triviaQuestion')

router.get('/', triviaQuestionController.index)
router.get('/id/:id', triviaQuestionController.showId)
router.get('/category/:category_name', triviaQuestionController.showCategory)

module.exports = router 