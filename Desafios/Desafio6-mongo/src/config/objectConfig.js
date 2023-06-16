const mongoose = require('mongoose')

let url = "mongodb+srv://adm:Pa$$w0rd123.@ecommercebackend.hkmj8v7.mongodb.net/?retryWrites=true&w=majority"

module.exports = {
    connectDB: () => {
        mongoose.connect(url)
        console.log("Connected to the DB");
    }
}