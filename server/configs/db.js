const mongoose = require('mongoose');

const connectDB = async () => {
  const db = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("connected to db: ", db.connection.name)
}

module.exports = connectDB;