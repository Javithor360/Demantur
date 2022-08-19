const io = require('socket.io')(5000, {
  cors: {
    origin: "http://localhost:3000",
  }
})

let allOnlineUsers = [];

const addUser = (el, socketId) => {
  !allOnlineUsers.some(user => user.nose === el) &&
    allOnlineUsers.push({ el, socketId });
}

io.on('connection', (socket) => {
  console.log('usuario conectado')
  socket.on('onlineUsers', el => {
    console.log(socket.id);
    // addUser(el, socket.id);

    io.emit('getOnlineUsers', allOnlineUsers);
  })
});
