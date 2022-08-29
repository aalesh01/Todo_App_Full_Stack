const mongoose = require('mongoose');

async function connectDatabase() {
    return new Promise((res, rej) => {
        const uri = 'mongodb+srv://Aalesh01:Aalesh%40123@cluster0.nu8wbcm.mongodb.net/test'
        mongoose.connect(uri, (err) => {
            if (err) {
                console.error("Error connecting to DataBase", err);
                return rej(err)
            }
            console.log("Successfully connected to database")
            res();
        })
    })
}
module.exports = connectDatabase;