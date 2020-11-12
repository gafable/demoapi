const express = require("express");
const port = 3000;
const app = express();

const database = require("./services/dbConnection");
const BookStoreRoutes = require("./routes/bookStoreRoutes");

app.use(express.json());

app.use("/api/bookstore/books", BookStoreRoutes);

database.connect();

app.listen(port, console.log(`Server running on port ${port}`));