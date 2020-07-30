const router = require('express')();

//TODO: Put controller actions into a controllers/category.js file
const Category = require('../models/Category')

router.get('/', (req, resp) => {
    Category.find({})
        .then(categories => {
            resp.json(categories)
        })
})

module.exports = router 