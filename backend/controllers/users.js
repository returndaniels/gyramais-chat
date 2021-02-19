const User = require('../models/user');

exports.createUser = async ({_id, name, islogged }) => {
    let error = null;
    const newUser = new User({ _id, name, islogged });
    
    if(!name) { 
        error = {
            status: 400,
            datail: "Nome de usuário não fornecido."
        };
        throw error;
    }

    await newUser.save();
    return newUser;
};

exports.getUser = async id => {
    const user = await User.findById(id);
    return user;
}

exports.deleteUser = async id => {
    const response = await User.findByIdAndDelete(id);
    return response;
};