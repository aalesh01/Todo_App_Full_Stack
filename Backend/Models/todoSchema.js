const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    "title":String,
    "status":String,
    "tag":String,
    "user": {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
},
    {
        timestamps: true
    }
)

const todoDB = mongoose.model('Todo', todoSchema)

module.exports = todoDB;