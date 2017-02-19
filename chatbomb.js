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

  socket.on('refresh:friends', function(data) {
    let friends = data.friends;
    let on_friends = [];
    friends.forEach(friend => {
      if (clients[friend.id] !== undefined) {
        on_friends.push(friend);
      }
    });
    socket.emit('friends:refreshed', { online_friends: on_friends });
  });

}
