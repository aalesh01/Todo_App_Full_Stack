const express = require("express")
const connectDatabase = require("./db")
const todo = require("./routes/todo")
const user = require("./routes/user")

const app = express()
app.use(express.json())
app.use('/user',user)
app.use('/todo',todo)




connectDatabase()
    .then(() => {
        app.listen('8080')
    })