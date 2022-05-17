require('dotenv').config({ path: './config.env' });
const express = require('express');
const connectDB = require('./config/db')
const errorHandler = require('./middleware/error');
const cors = require('cors');
const app = express();


//Connect DB
connectDB();

app.use(express.json());
app.use(cors());
app.use('/api/auth', require('./routes/auth'));
app.use('/api/private', require('./routes/private'));
//errorHandler
app.use(errorHandler)


const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => console.log(`server en ${PORT}`));

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error de loggeo ${err}`);
    server.close(() => process.exit(1));
})

// app.listen(PORT, () => console.log(`server en ${PORT}`));