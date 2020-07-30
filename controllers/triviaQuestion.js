const TriviaQuestion = require('../models/TriviaQuestion')

module.exports = {
    index: (req, resp) => {
        TriviaQuestion.find({})
            .then(triviaQuestions => {
                resp.json(triviaQuestions)
            })
    },

    showId: (req, resp) => {
        TriviaQuestion.findById(req.params.id)
            .then(triviaQuestion => {
                resp.json(triviaQuestion)
            })
    },

    showCategory: (req, resp) => {
        TriviaQuestion.find({category: req.params.category_name})
            .then(triviaQuestions => {
                resp.json(triviaQuestions)
            })
    },

    create: (req, resp) => {
        TriviaQuestion.create(req.body)
            .then(triviaQuestion => {
                resp.json(triviaQuestion)
            })
    },

    edit: (req, resp) => {
        TriviaQuestion.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        ).then(triviaQuestion => {
            resp.json(triviaQuestion)
        })
    },

    delete: (req, resp) => {
        TriviaQuestion.findOneAndRemove(
            { _id: req.params.id }
        ).then(triviaQuestion => {
            resp.json(triviaQuestion)
        })
    }
    
}