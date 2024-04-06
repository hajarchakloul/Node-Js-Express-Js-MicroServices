const mongoose = require('mongoose');
const Customerschema = mongoose.Schema ({
    name:{
    type: String,
    require: true
},
    age: {
    type: Number,
    require: true
    },
    address: {
    type: String,
    require: true
    
    }
})
    
    const Customer = mongoose.model("customer", Customerschema);
    
    module.exports = Customer;