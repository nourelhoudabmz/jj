const mongoose = require('mongoose');
const connect = mongoose.connect("mongodb+srv://nour:nour123@cluster0.esv0djl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

// Check database connected or not
connect.then(() => {
    console.log("Database Connected Successfully");
})
.catch(() => {
    console.log("Database cannot be Connected");
})

// Create Schema
const Loginschema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// collection part
const collection = new mongoose.model("users", Loginschema);

module.exports = collection;