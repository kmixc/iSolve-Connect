const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        index: {
            unique: true
        }
    },
    firstname: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    }
})

const User = mongoose.model("User", UserSchema);
module.exports = User;