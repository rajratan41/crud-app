const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const connectToDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => {
      console.log(`Connected DB: ${conn.connection.host}`);
    })
    .catch((err) => {
      console.log("DB Conection is failed");
      console.log(err.message);
      process.exit(1);
    });
};

module.exports = connectToDB;
