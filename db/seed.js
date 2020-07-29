const axios = require('axios');
const fs = require('fs');
const Category = require('../models/Category')

//Endpoints for external Open Trivia API
const categoryUrl = 'https://opentdb.com/api_category.php'

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
        console.log("Error: ", err)
    })//axios catch

//Seed triviaQuestions collection