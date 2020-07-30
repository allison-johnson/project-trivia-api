const TriviaQuestion = require('../models/TriviaQuestion')

module.exports = {
    index: (req, resp) => {
        TriviaQuestion.find({})
            .then(triviaQuestions => {
                resp.json(triviaQuestions)
            })
    }
}