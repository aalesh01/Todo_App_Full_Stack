const express = require('express');
const userDB = require('../Models/userSchema');
const jwt = require('jsonwebtoken');

const user = express.Router();
const SECRET = "SECRET";

user.post('/register', async (req, res) => {
    const { email, password } = req.body;
    let existingUser = await userDB.findOne({
        email: email
    })

    if (existingUser) {
        return res.status(400).send({
            error: "User already exists"
        })
    }
    let userDoc = await userDB.create({ email: email, password: password, ip: req.socket.remoteAddress })
    delete userDoc.password
    res.send({ message: "Account has been created successfully..", data: userDoc })
})

user.post('/login', async (req, res) => {
    const { email, password } = req.body
    let user = await userDB.findOne({
        email: email
    }, {
        password: 1,
        _id: 1,
        email: 1,
        name: 1,
    })

    if (user) {
        if (user.password === password) {
            let encryptedToken = jwt.sign({
                id: user._id,
                email: user.email,
            }, SECRET)

            return res.send({
                data: {
                    token: encryptedToken
                }
            })
        } else {
            return res.send({
                error: "Password does not match."
            })
        }
    } else {
        return res.status(404).send({
            error: "User is not found"
        })
    }
})



module.exports = user;
