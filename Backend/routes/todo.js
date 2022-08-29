const express = require('express');
const todoDB = require('../Models/userSchema');

const todo = express.Router()

todo.get('/', (req, res) => {
    res.send()
})

todo.post('/create', async (req, res) => {
    const { taskname, status, tag } = req.body;
    const todoDoc = await todoDB.create({ taskname: taskname, status: status, tag: tag })
    res.send(todoDoc);
})

todo.get('/', async (req, res) => {
    res.send(todoDB.find())
})

todo.delete('/:id', async (req, res) => {
    const id = req.body.id
    todoDB.deleteOne({ _id: id })
    res.send("deleted")
})

module.exports = todo

