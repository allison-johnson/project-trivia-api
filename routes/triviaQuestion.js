const router = require('express')();
const triviaQuestionController = require('../controllers/triviaQuestion')

//All of these paths implicitly start with /triviaQuestion
/*
 * @api {get} 
*/

router.get('/', triviaQuestionController.index)
router.get('/id/:id', triviaQuestionController.showId)
router.get('/category/:category_name', triviaQuestionController.showCategory)
router.post('/', triviaQuestionController.create)
router.put('/:id', triviaQuestionController.edit)
router.delete('/:id', triviaQuestionController.delete)

module.exports = router 

