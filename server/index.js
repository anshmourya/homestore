/**
 * !SERVER FILE
 */

const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io')
const cors = require('cors');

app.use(cors());

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ['GET', 'POST'],
    },
});

io.on("connection", (socket) => {
    console.log(socket.id);

    socket.on("join_room", (data) => {
        socket.join(data);
        console.log(`User with ID: ${socket.id} joined room ${data}`);
    });

    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data);
    });

    socket.on("disconnect", () => {
        console.log('disconnected', socket.id);
        // socket.removeAllListeners('send_message');
        // socket.removeAllListeners('disconnect');
        // io.removeAllListeners('connection');
    });
});



const serv = server.listen(3001, () => {
    console.log('server running');
})