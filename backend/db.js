require('dotenv').config()

const mongoose = require('mongoose');

const url = process.env.MONGODB_URL
mongoose.connect(url)


const userSchema = new mongoose.Schema({
    fullname: {
        type:String,
        reuired:true,
        minLength: [3, 'Fullname must be at least 6']
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

})

const User = mongoose.model("User", userSchema)

module.exports ={
    User
}