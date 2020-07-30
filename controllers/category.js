const Category = require('../models/Category')

module.exports = {
    index: (req, resp) => {
        Category.find({})
            .then(categories => {
                resp.json(categories)
            })
    },

    showId: (req, resp) => {
        Category.findById(req.params.id)
            .then(category => {
                resp.json(category)
            })
    },

    create: (req, resp) => {
        Category.create(req.body)
            .then(category => {
                resp.json(category)
            })
    },

    delete: (req, resp) => {
        Category.findByIdAndDelete(req.params.id)
            .then(category => {
                resp.json(category)
            })
    }
}