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
        console.log(req.params)
        TriviaQuestion.find({category: req.params.category_name})
            .then(triviaQuestions => {
                resp.json(triviaQuestions)
            })
    }

}