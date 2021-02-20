const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();
require('./database');

const port = process.env.PORT || 4200;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const { createUser, deleteUser } = require('./controllers/users');
const { createMessage, getMessages } = require('./controllers/messages');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use(router);

const generateHash = (string) => {
  var hash = 0, i, chr;
  for (i = 0; i < string.length; i++) {
    chr   = string.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
} 

io.on('connection', (socket) => {
  socket.on('join', ({ name, islogged }, callback) => {
    createUser({ _id: generateHash(name), name, islogged })
      .then(user => {
        socket.emit('userJoined', user);
      })
      .catch(error => {
        if(error.name === 'MongoError') {
          error = {
            name: error.name,
            status: 409,
            detail: "O nome fornecido já é um nome registrado."
          }
        }
        socket.emit('userJoinError', error);
      });
  });

  socket.on('userLoggedIn', (user) => {
    io.emit('userJoinedEvent', {  
      user: "Admin",
      text: `${user.name} entrou no chat` 
    });
  });

  socket.on('userLoggedOut', (user) => {
    if(user) {
      deleteUser(user._id);
      io.emit('userJoinedEvent', { 
          user: "Admin",
          text: `${user.name} saiu do chat` 
        });
    }
  })

  socket.on('sendMessage', ({ user, message }, callback) => {
    createMessage({ text: message, user: user.name, userIslogged: true, date: new Date() })
      .then(message => io.emit('message', message))
      .catch(error => callback(error));
  });

  socket.on('previusMessagesRequest', () => {
    getMessages().then(messages=>{
      io.to(socket.id).emit('previusMessagesResponse', messages);
    });
  });

});

server.listen(port, () => console.log(`Server has started.`));