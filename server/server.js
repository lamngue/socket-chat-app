const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname, '../public');
const app = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const io = socketIO(server);
io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('createMessage',(message) => {
    	console.log('createMessage', message);
        io.emit('newMessage',{
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime(),
            ahihi: 'ahihi'
        });
    });
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});
app.use(express.static(publicPath));
server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})