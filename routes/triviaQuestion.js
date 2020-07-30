const router = require('express')();
const triviaQuestionController = require('../controllers/triviaQuestion')

//All of these paths implicityly start with /triviaQuestion
router.get('/', triviaQuestionController.index)
router.get('/id/:id', triviaQuestionController.showId)
router.get('/category/:category_name', triviaQuestionController.showCategory)
router.post('/', triviaQuestionController.create)
router.put('/:id', triviaQuestionController.edit)
router.delete('/:id', triviaQuestionController.delete)

module.exports = router 

