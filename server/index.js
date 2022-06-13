require('dotenv').config();
const app = require('./app');
const connectDB = require('./configs/db');

connectDB();

app.listen(process.env.PORT, () => {
  console.log('servidor en puerto ' + process.env.PORT);
})