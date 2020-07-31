*Database To Do*
[x] Database created
[x] Raw data fetched from Open Trivia API
[x] categories collection seeded with data from Open Trivia API
    [x] categories data also written to a JSON file 
[x] triviaquestion collection seed with data from Open Trivia API

*Server To Do*
[x] Create Express server
[x] Create routes for categories resource
[x] Create routes for triviaQuestions resource
[ ] Add Readme

*Stretch*
[] When a new question is created, also create a new category if it's not already in the db
    [] In this case, maybe don't allow categories to be deleted? Or, when a category is deleted, delete all questions with that category?
[] Make multiple API calls to seed DB with more than 50 questions
    [] trivia questions : {
        easy: [{q1}, {q2}],
        medium: [{q1}, {q2}],
        hard: [{q1}, {q2}]
    }
[] Link trivia questions and categories (?)
    [] triviaQuestionSchema has a category field that's a categorySchema instead of a String

Connection string from Mongo Atlas:
heroku config:set DB_URL="mongodb+srv://mongodb:mongodb@cluster0.ds1er.mongodb.net/<dbname>?retryWrites=true&w=majority"