const mongoose = require('mongoose')

let URL = "mongodb+srv://admmongo:Pa$$w0rd123.@ecommerce.4v4b28p.mongodb.net/?retryWrites=true&w=majority"

module.exports = {
    connectDB: () => {
        mongoose.connect(URL)
        console.log("Connected to the DB");
    }
}