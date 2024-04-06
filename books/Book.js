const mongoose = require('mongoose');
const bookschema = mongoose.Schema({
title: {
type: String,
require: true
},
author: {
type: String,
require: true
},
numberPages: {
type: Number,
require: false
},

publisher: {
type: String,
require: false

}
})

const Book = mongoose.model("book", bookschema) ;

module.exports = Book;