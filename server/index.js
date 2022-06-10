require('dotenv').config();
const app = require('./app');
const connectDB = require('./configs/db');

//middelwares
connectDB();

app.listen(4000, () => {
  console.log('servidor en puerto ' + 4000);
})