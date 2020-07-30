const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const triviaQuestionSchema = new Schema({
    category: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    correct_answer: {
        type: String,
        required: true
    },
    incorrect_answers: {
        type: [String],
        required: true
    }
})

module.exports = mongoose.model('TriviaQuestion', triviaQuestionSchema)