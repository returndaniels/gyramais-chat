const mongoose = require('../database');

const messageSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            require: true
        },
        author: {
            type: String,
            require: true
        },
        authorIslogged: {
            type: Boolean,
            require: true
        }
    }, { timestamps: true }
);

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;