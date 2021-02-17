const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();
require('./database');

const port = process.env.PORT || 4200;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const { createUser, deleteUser, getUser } = require('./controllers/users');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

io.on('connect', (socket) => {
    socket.on('join', ({ name, islogged }, callback) => {
        const { error, user } = createUser({ _id: socket.id, name, islogged });

        if(error) return callback(error);

        socket.emit('joined', { _id: socket.id, name, islogged });
        socket.broadcast.emit('joinedEvent', {  
            text: `${name} entrou no chat` 
        });
  
        callback();
    });
  
    socket.on('sendMessage', (message, callback) => {
      const user = getUser(socket.id);
  
      io.emit('message', { user: user.name, text: message, date: new Date() });
  
      callback();
    });
  
    socket.on('disconnect', (user, callback) => {
      const { error } = deleteUser(socket.id);
      
      callback(error);
  
      if(user) {
        io.emit('joinedEvent', { text: `${user.name} saiu do chat` });
      }
    })
  });

app.listen(port, console.log(`Server running on ${port}`));