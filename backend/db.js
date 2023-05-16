const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_URL;

const connectToMongo = () => {
  mongoose.set("strictQuery", true);

  mongoose.connect(mongoURI, () => {
    console.log("Connected to Mongo Successfully");
  });
};

module.exports = connectToMongo;
