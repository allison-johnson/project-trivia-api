const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use(require('./routes/index'))

app.listen(3000, () => {
    console.log("Listening on port 3000")
})
