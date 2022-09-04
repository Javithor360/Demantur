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
    console.log(allOnlineUsers);
    addUser(Dui, socket.id);
    io.emit('getOnlineUsers', allOnlineUsers);
  })

  // hacer las transacciones
  socket.on('DoingTransfer', ({ SenderDui, ReceiverDui, transfer }) => {
    const SenderUser = getOneUser(ReceiverDui);
    if (SenderUser !== undefined) {
      io.to(SenderUser.socketId).emit('getTransfer', {
        SenderDui,
        transfer
      });
    }
  });

  socket.on('DeleteContact', ({ HimDui, MyDui }) => {
    const User = getOneUser(HimDui);
    if (User !== undefined) {
      io.to(User.socketId).emit('DeletedContact', {
        Dui: MyDui
      })
    }
  })

  socket.on('AddFriendRequest', ({ element, By }) => {
    const User = getOneUser(element.Dui);
    if (User !== undefined) {
      io.to(User.socketId).emit('AddedFriendReq', {
        element: By
      })
    }
  })

  socket.on('AcceptFriendReq', ({ element, By }) => {
    const User = getOneUser(element.Dui)
    if (User !== undefined) {
      io.to(User.socketId).emit('AcceptedFriendReq', { element: By })
    }
  })

  socket.on('CancelFriendReq', ({ element, By }) => {
    const User = getOneUser(element.Dui)
    if (User !== undefined) {
      io.to(User.socketId).emit('CanceledFriendReq', { element: By })
    }
  })

  socket.on('DeclineFriendReq', ({ element, By }) => {
    const User = getOneUser(element.Dui)
    if (User !== undefined) {
      io.to(User.socketId).emit('DeclinedFriendReq', { element: By })
    }
  })

  socket.on('disconnect', () => {
    // console.log(allOnlineUsers);
    // console.log(socket.id);
    removeUser(socket.id)
    io.emit('getOnlineUsers', allOnlineUsers);
  })
});
