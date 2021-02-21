const Message = require('../models/message');

exports.createMessage = async ({ text, user, userIslogged, date }) => {
    let error = null;
    const newMessage = new Message({ text, user, userIslogged, date });
    
    if(!text) { 
        error = {
            status: 400,
            detail: "Mensagem sem conteúdo."
        };
        throw error;
    }

    await newMessage.save();
    return newMessage;
};

exports.getMessages = async () => {
    const messages = await Message.find();
    return messages;
};
