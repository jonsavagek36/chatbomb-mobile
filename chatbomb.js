let io;
let clients = {};

exports.init = function(sio, socket) {
  let io = sio;

  socket.on('user:init', function(data) {
    let user = {
      user: data.user,
      socket_id: data.socket_id
    };
    clients[data.user.id] = user;
    socket.emit('test', { msg: 'Working' });
  });

}
