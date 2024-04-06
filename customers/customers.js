require("dotenv").config();
const express = require('express');

// Connect
require('../db/db');

const Customer = require('./Customer');

const app = express();
const port = 5000;
app.use(express.json())

app. post('/customer', (req, res) => {
const newCustomer = new Customer({...req.body});
newCustomer.save().then(() => {
res.send('New Customer created successfully!');
}).catch((err) => {
res.status(500).send('Internal Server Error!');
})
})