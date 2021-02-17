const { response } = require('express');
const User = require('../models/user');

exports.createUser = async ({_id, name, islogged }) => {

    let error = null;
    const newUser = new User({ _id, name, islogged });
    
    if(!name) { 
        error = {
            status: 400,
            datail: "Nome de usuário não fornecido."
        };
    }

    newUser
        .save()
        .then(() => {
            return {
                user: newUser,
                error
            };
        })
        .catch(() => {
            error = {
                type: 'error',
                status: 403,
                datail: "Falha na requisição. Usuário já existe."
            };
            return {
                user: null,
                error
            }
        });
};

exports.getUser = async id => {
    const user = await User.findById(id);
    return user;
}

exports.deleteUser = async id => {
    const response = User.findByIdAndDelete(id)
        .then(() => {
            return { error: null };
        }).catch(() => {
            return {
                error: {
                    type: 'error',
                    status: 400,
                    datail: "Usuaário não deletado."
                }
            };
        });
    return response;
};