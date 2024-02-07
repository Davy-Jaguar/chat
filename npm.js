require('dotenv').config();
const mongoose = require('mongoose');
const {Schema, model} = require('mongoose');

(async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected!")
        
    } catch (error) {
        console.log(error)
    }
})();

const msg = new Schema({
    userId: {
        type: String,
        required: true,
    },
    msg: {
        type: String,
        required: true,
    }
})