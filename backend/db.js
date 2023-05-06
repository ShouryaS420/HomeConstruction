const mongoose = require('mongoose');


const mongoURI = "mongodb+srv://meshouryanarwade:Password@cluster0.b6z4nz9.mongodb.net/?retryWrites=true"

const connectToMongo = () => {
    
    mongoose.set("strictQuery", true);

    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;