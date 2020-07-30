const router = require('express')();
const categoryController = require('../controllers/category')

router.get('/', categoryController.index)
router.get('/id/:id', categoryController.showId)
router.post('/', categoryController.create)
router.delete('/:id', categoryController.delete)

module.exports = router 