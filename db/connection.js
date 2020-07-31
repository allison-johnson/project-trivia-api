const mongoose = require('mongoose');

//mongoose.Promise = Promise;

//When this script gets executed from Heroku, NODE_ENV gets assigned to "production"
//DB_URL will be a url provided by Atlas, and will get set when
//we run $ heroku config:set DB_URL="..." from terminal
let mongoURI = ""
if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
} else {
    mongoURI = "mongodb://localhoset/trivia"
}

mongoose.connect(mongoURI, { useNewUrlParser: true })
    .then(instance => {
        console.log(`Connected to db: ${instance.connections[0].name}`)
    })
    .catch(err => {
        console.log("Connection failed!", err)
    })

module.exports = mongoose;