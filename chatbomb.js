let io;
let clients = {};

exports.init = function(sio, socket) {
  let io = sio;

  socket.on('user:init', function(data) {
    clients[data.user.id] = data.socket_id;
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

  socket.once('disconnect', function() {
    let userId = getKey(socket.id, clients);
    delete clients[userId];
  });

}

function getKey(val, obj) {
  for (let key in obj) {
    value = obj[key];
    if (value == val) {
      return key;
      break;
    }
  }
}
