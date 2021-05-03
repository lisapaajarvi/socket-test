const express = require('express');
const http = require('http');
const {Server} = require('socket.io')

const app = express();
app.use(express.static('public'));

const server = http.createServer(app);

const io = new Server(server);

io.on('connection', (socket) => {
    console.log("Client was connected:", socket.id);
    socket.broadcast.emit('user-connected', socket.id); // skickas till alla utom den som precis connectade
    io.emit('user-connected', socket.id); // till alla som är connected
    socket.emit('new-user-message', "Welcome!"); // till endast den som precis connectade
});

server.listen(3000, () => {
    console.log("Server is running!")
});