const mongoose = require('../database');

const userSchema = new mongoose.Schema({
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