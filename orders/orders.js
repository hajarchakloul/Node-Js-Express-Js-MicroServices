require("dotenv").config(); // Load environment variables
const express = require('express');
const mongoose = require("mongoose");
const axios = require('axios');

require('../db/db');

const Order = require('./Order');

const app = express();
const port = 9000;

app.use(express.json());

app.post('/order', (req, res) => {
    const newOrder = new Order({
        customerID: mongoose.Types.ObjectId(req.body.customerID), // Convert customerID to ObjectId
        bookID: mongoose.Types.ObjectId(req.body.bookID), // Convert bookID to ObjectId
        initialDate: req.body.initialDate,
        deliveryDate: req.body.deliveryDate
    });
});

newOrder.save().then(() => {
        res.send('New order added successfully!');
    })
    .catch((err) => {
        res.status(500).send('Internal Server Error!');
    });


    app.get('/orders', (req, res) => {
        Order.find()
            .then((orders) => {
                if (orders) { 
                    res.json(orders);
                } else {
                    res.status(404).send('Orders not found');
                }
            })
            .catch((err) => {
                res.status(500).send('Internal Server Error!');
            });
    });
    