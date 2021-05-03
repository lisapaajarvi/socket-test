const express = require('express');
const http = require('http');
const {Server} = require('socket.io')

const app = express();
app.use(express.static('public'));

const server = http.createServer(app);

const io = new Server(server);

io.on('connection', (socket) => {
    console.log("Client was connected", socket.id);
});

server.listen(3000, () => {
    console.log("Server is running!")
});