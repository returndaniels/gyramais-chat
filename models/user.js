const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        require: true,
        unique: true
    },
    name: {
        type: String,
        require: true,
        unique: true
    },
    islogged: {
        type: Boolean,
        defult: true
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;