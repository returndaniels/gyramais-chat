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

const { createUser, deleteUser, getUser } = require('./controllers/users');

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
        socket.emit('joined', user);
        socket.broadcast.emit('joinedEvent', {  
            text: `${name} entrou no chat` 
        });
      })
      .catch(error => callback(error));
      
    callback();
  });

  socket.on('sendMessage', ({ user, message }) => {
    io.emit(
      'message', 
      { 
        user: user.name, 
        text: message, 
        date: new Date() 
      });
  });

  socket.on('disConnect', (user) => {
    if(user) {
      deleteUser(user._id);
      io.emit(
        'joinedEvent', 
        { 
          text: `${user.name} saiu do chat` 
        });
    }
  })
});

server.listen(port, () => console.log(`Server has started.`));