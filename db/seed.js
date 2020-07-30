const axios = require('axios');
const fs = require('fs');
const atob = require('atob');
const Category = require('../models/Category')
const TriviaQuestion = require('../models/TriviaQuestion')
//const categoriesData = require('./categories.json')

//Endpoints for external Open Trivia API
const categoryUrl = 'https://opentdb.com/api_category.php'
const questionUrl = 'https://opentdb.com/api.php?amount=50&difficulty=easy&type=multiple&encode=base64'

//Seed categories collection
axios.get(categoryUrl)
    .then(resp => {
        let rawData = resp.data.trivia_categories
        //Create an array of objects, each of which has only a name
        let categoryNames = rawData.map(item => {
            return {name: item.name} 
        });

        //Seed collection
        Category.deleteMany({})
            .then(
                Category.create(categoryNames)
                    .then( categories => {
                        //Turn array of objects from DB into JSON format
                        let categoriesJSON = JSON.stringify(categories)
                        //Write collection to file in JSON format
                        fs.writeFile('./db/categories.json', categoriesJSON, err => {
                            if (err) {
                                console.log("Error writing to file: ", err)
                            } else {
                                console.log("Categories data written to file")
                            }
                        })
                    })
            )
    })//axios then
    .catch(err => {
        console.log("Error from categoryUrl: ", err)
    })//axios catch

//Seed triviaQuestions collection
//Not going through the process of writing data to a JSON file like we did with categories
axios.get(questionUrl)
    .then(resp => {
        console.log("Response from questionUrl: ", resp.data.results)
        let data = resp.data.results
        //decodedData will be an array of decoded objects, each representing a question
        let decodedData = data.map(obj => {
            let decodedObj = {}
            for (const property in obj) {
                if (property === "incorrect_answers") {
                    let decodedIncorrectAnswers = []
                    for (let i = 0; i < obj.incorrect_answers.length; i++ ){
                        decodedIncorrectAnswers.push(atob(obj.incorrect_answers[i]))
                    }
                    decodedObj["incorrect_answers"] = decodedIncorrectAnswers
                } else {
                    decodedObj[property] = atob(obj[property])
                }
            }
            return decodedObj
        })

        //Seed triviaQuestions collection with decodedData
        TriviaQuestion.deleteMany({})
            .then(() => {
                TriviaQuestion.create(decodedData)
                    .then(triviaQuestions => {
                        console.log(triviaQuestions)
                    })
            })

    })//axios then
    .catch(err => {
        console.log("Error from questionUrl: ", err)
    })//axios catch