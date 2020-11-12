const Book = require("../models/Book");
const parseRequestBody = require("../utils/parseRequestBody");

module.exports = {

    getBooks: async(request, response) => {

        try {
            const books = await Book.find();
            if (!books) {
                return response.status(400).json({
                    error: "Error in getting books!",
                });
            }

            response.status(200).json({
                books: books,
            });
        } catch (e) {
            return response.status(400).json({
                error: e,
            });
        }

    },

    getBookById: async(request, response) => {

        try {
            const book = await Book.find({ _id: request.params.id });

            if (!book || book.length === 0) {
                return response.status(400).json({
                    error: "Book not found!",
                });
            }

            response.status(200).json({
                book: book,
            });
        } catch (e) {
            return response.status(400).json({
                error: e,
            });
        }

    },

    addBook: async(request, response) => {

        try {

            const newBook = new Book({
                title: request.body.title,
                genre: request.body.genre,
                author: request.body.author,
                yearPublished: request.body.yearPublished,
                price: request.body.price
            });

            const result = await newBook.save();

            if (!result) {
                return response.status(400).json({
                    error: "Error in adding new book!",
                });
            }

            response.status(200).json({
                message: "New book added!",
            });

        } catch (e) {
            return response.status(400).json({
                error: e,
            });
        }

    },

    updateBookById: async(request, response) => {

        const updates = parseRequestBody(request.body);

        try {
            const result = await Book.updateOne({ _id: request.params.id }, { $set: updates });

            if (!result) {
                return response.status(400).json({
                    error: "Error in updating book!",
                });
            }

            response.status(200).json({
                result: result,
            });

        } catch (e) {
            return response.status(400).json({
                error: e,
            });
        }

    },

    deleteBookById: async(request, response) => {

        try {
            await Book.deleteOne({ _id: request.params.id }, (error, result) => {
                if (error) {
                    return response.status(400).json({
                        error: error,
                    });
                }

                response.status(200).json({
                    message: "Successfully deleted book",
                    result: result,
                });
            });
        } catch (e) {
            return response.status(400).json({
                error: e,
            });
        }
    }
};