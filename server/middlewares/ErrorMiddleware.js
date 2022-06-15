const ErrorResponse = require('../utils/ErrorMessage')

const MiddlewareError = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;

  console.log(err.code)

  // if (err.code == 11000) {
  //   const message = `LLLLL`;
  //   error = new ErrorResponse(message, 400);
  // }

  if (err.name == "ValidationError") {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    succes: false,
    error: error.message
  });
}

module.exports = MiddlewareError;