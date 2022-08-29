const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    "email": String,
    "password": String,
    "ip": String,
},
    {
        timestamps: true
    }
)

const userDB = mongoose.model('User', userSchema)

module.exports = userDB;