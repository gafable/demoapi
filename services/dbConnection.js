const mongoose = require("mongoose");

const connectToDatabase = () => {
    mongoose.
    connect("mongodb://localhost:27017/bookstore", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        .then(() => console.log("Connected to database"))
        .catch((error) => console.error(error));
};

module.exports = {
    connect: connectToDatabase,
};