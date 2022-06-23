const express = require('express');
const app = express();
const MiddlewareError = require('./middlewares/ErrorMiddleware')

// app configuraciones
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/api/auth/', require('./routes/auth.routes'));
app.use('/api/admin/', require('./routes/admin.routes'));

// Error Middleware
app.use(MiddlewareError);

module.exports = app;