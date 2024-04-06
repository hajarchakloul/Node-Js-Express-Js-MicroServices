require("dotenv").config();
const express = require('express');

// Connect
require('../db/db');

const Book = require('./Book');

const app = express();
const port = 3000;
app.use(express.json())

app.post('/book', (req, res) => {
const newBook = new Book({...req.body});
newBook.save().then(() => {
res.send('New Book added successfully!')
}).catch((err) => {
res.status(500).send('Internal Server Error!');

})
})

app.get('/books', (req, res) => {
    Book.find().then((books) => {
    if (books.length !== 0) {
    res.json(books)
    } else {
    res.status(404).send('Books not found');
    }
    }).catch((err) => {
    res.status(500).send('Internal Server Error!');
    
    });
})