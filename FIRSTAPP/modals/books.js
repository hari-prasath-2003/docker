const mongoose = require("mongoose")
const { Schema } = require("mongoose")

const bookSchema = new Schema({
    author: String,
    country: String,
    imageLink: String,
    language: String,
    link: String,
    pages: Number,
    title: String,
    year: Number
})

module.exports = mongoose.model("book", bookSchema)