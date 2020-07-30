const Category = require('../models/Category')

module.exports = {
    index: (req, resp) => {
        Category.find({})
            .then(categories => {
                resp.json(categories)
            })
    }
}