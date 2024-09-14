const mongoose = require("mongoose");
require("dotenv").config();

// const DB_URL = 'mongodb://localhost:27017/urlshortener';

const connect = () => {
    mongoose.connect(process.env.DB_URL)
        .then(() => {
            console.log("MongoDB connected successfully");
        })
        .catch((error) => {
            console.error("MongoDB connection error:", error);
        });
};

module.exports = connect;
