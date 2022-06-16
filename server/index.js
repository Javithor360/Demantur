// Configuracion de las variables de entorno
require('dotenv').config();

const app = require('./app');
const connectDB = require('./configs/db');

// Correr la base de datos
connectDB();

// Correr el servidor
app.listen(process.env.PORT, () => {
  console.log('servidor en puerto ' + process.env.PORT);
})