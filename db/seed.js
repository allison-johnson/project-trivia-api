const axios = require('axios');
const fs = require('fs');
const Category = require('../models/Category')
//const categoriesData = require('./categories.json')

//Endpoints for external Open Trivia API
const categoryUrl = 'https://opentdb.com/api_category.php'
const questionUrl = 'https://opentdb.com/api.php?amount=50'

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
axios.get(questionUrl)
    .then(resp => {
        console.log("Response from questionUrl: ", resp.data.results)
    })
    .catch(err => {
        console.log("Error from questionUrl: ", err)
    })