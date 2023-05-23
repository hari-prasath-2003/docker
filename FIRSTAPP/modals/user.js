const mongoose = require("mongoose")
const { Schema } = require("mongoose")

const bookSchema = new Schema({
    name:String,
    password:String,
})

module.exports = mongoose.model("user", bookSchema)