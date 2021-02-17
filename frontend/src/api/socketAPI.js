import io from 'socket.io-client';

const connect = (port = 4200) => {
    var socket = io.connect(`http://localhost:${port}`, {
        reconnection: true,
    });

    return socket;
};

export { connect };