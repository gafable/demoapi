const Joi = require("joi");

const BookSchema = Joi.object({
    title: Joi.required().string().min(4).max(50),
    genre: Joi.required().string().min(4).max(25),
    author: Joi.required().string().min(3).max(20),
    yearPublished: Joi.required().isoDate(),
    price: Joi.required().integer()
});

module.exports = BookSchema;