const { response } = require('express');
const User = require('../models/user');

exports.createUser = async ({_id, name, islogged }) => {

    const newUser = new User({ _id, name, islogged });
    
    if(!name) { 
        return {
            type: 'error',
            status: 400,
            datail: "Nome de usuário não fornecido."
        };
    }

    newUser
        .save()
        .then(() => {
            return {
                type: 'response',
                status: 201,
                datail: "Usuário criado.",
                user: newUser
            };
        })
        .catch(() => {
            return {
                type: 'error',
                status: 403,
                datail: "Falha na requisição. Usuário já existe."
            };
        });
};

exports.getUser = async id => {
    const user = await User.findById(id);
    return user;
}

exports.deleteUser = async id => {
    const response = User.findByIdAndDelete(id)
        .then(() => {
            return {
                type: 'response',
                status: 204,
                datail: "Usuário deletado."
            };
        }).catch(() => {
            return {
                type: 'error',
                status: 400,
                datail: "Usuaário não deletado."
            };
        });
    return response;
};