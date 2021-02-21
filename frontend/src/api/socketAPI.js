import io from 'socket.io-client';

const connect = () => {
    var socket = io.connect(`https://gyramais-chat.herokuapp.com`, {
        reconnection: true,
    });

    return socket;
};

export { connect };