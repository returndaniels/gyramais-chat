const { response } = require('express');
const User = require('../models/user');

exports.createUser = async (req, res) => {
    const { name, islogged } = req.body;

    const newUser = new User({ name, islogged });
    
    if(!name) { 
        return res
            .status(400)
            .json({ detail: "Nome de usuário não fornecido."});
    }

    newUser
        .save()
        .then(response => {
            return res
                .status(201)
                .json({ newUser });
        })
        .catch(error => {
            return res
                .status(403)
                .json({ datail: "Falha na requisição. Usuário já existe."});
        });
};

exports.deleteUser = async (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(response=> {
            return res
                .status(204)
                .send("Usuário deletado");
        }).catch(error => {
            return res
                .status(400)
                .json({ detail: "Usuaário não deletado." })
        });
};