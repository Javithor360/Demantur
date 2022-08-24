const io = require('socket.io')(5000, {
  cors: {
    origin: "http://localhost:3000",
  }
})

let allOnlineUsers = [];

const addUser = (Dui, socketId) => {
  !allOnlineUsers.some(user => user.Dui === Dui) &&
    allOnlineUsers.push({ Dui, socketId });
}

const removeUser = (socketId) => {
  allOnlineUsers = allOnlineUsers.filter(user => user.socketId !== socketId);
}

const getOneUser = (SenderDui) => {
  return allOnlineUsers.find(user => user.Dui === SenderDui)
}

io.on('connection', (socket) => {
  // console.log('usuario conectado');
  socket.on('onlineUsers', Dui => {
    addUser(Dui, socket.id);
    io.emit('getOnlineUsers', allOnlineUsers);
  })

  // hacer las transacciones
  socket.on('DoingTransfer', ({ SenderDui, ReceiverDui, transfer }) => {
    const SenderUser = getOneUser(ReceiverDui);
    // console.log(allOnlineUsers);
    if (SenderUser !== undefined) {
      io.to(SenderUser.socketId).emit('getTransfer', {
        SenderDui,
        transfer
      });
    }
  });

  socket.on('disconnect', () => {
    removeUser(socket.id)
    io.emit('getOnlineUsers', allOnlineUsers);
  })
});
