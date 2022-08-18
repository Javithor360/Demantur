const io = require('socket.io')(5000, {
  cors: {
    origin: "http://localhost:3000",
  }
})

io.on('connection', (socket) => {
  console.log('a user conected');
  io.emit('welcome', 'hola')
});
