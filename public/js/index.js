//CLIENT

const socket = io();
socket.on('connect', function() {
    console.log('connected to server from client');

});
socket.on('disconnect', function() {
    console.log('disconnected from server');
});

socket.on('newEmail', function(email) {
    console.log('New email!', email);
});
 socket.on('newMessage',(newMessage) => {
    	console.log('newMessage', newMessage);
});