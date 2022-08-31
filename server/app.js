const express = require("express");
const app = express();
const cors = require("cors");
const fileUpload = require("express-fileupload");
const MiddlewareError = require("./middlewares/ErrorMiddleware");

// app configuraciones
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./upload",
  })
);

// routes
app.use("/api/auth/", require("./routes/auth.routes"));
app.use("/api/admin/", require("./routes/admin.routes"));
app.use("/api/dashboard/", require("./routes/dashboard.routes"));
app.use("/api/accounts/", require("./routes/accounts.routes"));
app.use("/api/requests/", require("./routes/requests.routes"));
app.use("/api/employee/", require("./routes/employee.routes"));
app.use('/api/Loans/', require('./routes/Loans.routes'));

// Error Middleware
app.use(MiddlewareError);

module.exports = app;
