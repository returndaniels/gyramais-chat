const mongoose = require('../database');

const messageSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            require: true
        },
        user: {
            type: String,
            require: true
        },
        userIslogged: {
            type: Boolean,
            require: true
        },
        date: {
            type: Date
        }
    }, { timestamps: true }
);

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;