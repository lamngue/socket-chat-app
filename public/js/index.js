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
    var li = $('<li></li>');
    li.text(`${newMessage.from}: ${newMessage.text}`)
    $('#messages').append(li);
});


$("#message-form").on('submit',function(e){
    e.preventDefault();
    socket.emit('createMessage',{
        from: 'User',
        text: $('[name=message]').val()
    },function(){

    });
});