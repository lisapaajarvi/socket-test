const express = require('express');
const http = require('http');
const {Server} = require('socket.io')

const app = express();

app.use(express.static('public'));

const server = http.createServer(app);

const io = new Server(server);

io.on('connection', (socket) => {
    console.log('User connected:', socket.id);
    socket.on('message', (msg) => {
        console.log('message: ' + msg);
      });
    //io.emit('user-connected', socket.id); // skickas till alla som är connected
    socket.broadcast.emit('user-connected', socket.id); // skickas till alla utom den som precis connectade
    socket.emit('new-user-message', "Welcome!"); // skickas endast till den som precis connectade
});


server.listen(3000, () => {
    console.log("Server is running!")
});