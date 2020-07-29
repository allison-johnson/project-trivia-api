const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost/trivia', 
    {useNewUrlParser: true}
);

module.exports = mongoose;