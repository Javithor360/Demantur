const express = require('express');
const app = express();

// routes
app.use('/api/auth', require('./routes/auth.routes'))


module.exports = app;